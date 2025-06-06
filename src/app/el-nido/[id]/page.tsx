import { AccomRates } from '@/components/accom-rates';
import { BookForm } from '@/components/book-form';
import { HeroCarousel } from '@/components/hero-carousel';
import { DynamicTable } from '@/components/dynamic-table';
import { PricingTable } from '@/components/pricing-table';
import { tours } from '@/data/tours';
import { cn, getTour } from '@/lib/utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return tours.map(({ id }) => ({ id }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const tour = getTour(id);

  if (!tour) return {};

  return {
    title: tour.title,
    description: tour.description,
    openGraph: {
      images: [{ url: tour.images[0] }],
    },
  };
}

const SinglePage = async ({ params }: Props) => {
  const { id } = await params;
  const tour = getTour(id);

  if (!tour) return notFound();

  return (
    <section className=''>
      <div className='max-w-3xl mx-auto pt-16'>
        <div className='space-y-3 px-2'>
          <HeroCarousel images={tour.images} />
          <div>
            <h3 className='text-xl text-[#4FAFAF] font-semibold tracking-wide'>
              {tour.title}
            </h3>
            <p>{tour.description}</p>
          </div>
          <div className='bg-[#4FAFAF]/10 space-y-3 p-3'>
            <h4 className='text-xl text-[#4FAFAF] font-semibold tracking-wide'>
              Itenerary
            </h4>
            {tour.itinerary?.map((item) => (
              <div
                key={item.title}
                className={cn('pl-4', tour.itinerary.length === 1 && 'pl-2')}
              >
                {tour.itinerary.length > 1 && (
                  <p>
                    {item.day ? `Day ${item.day}: ${item.title}` : item.title}
                  </p>
                )}
                <ul
                  className={cn('pl-4', tour.itinerary.length === 1 && 'pl-2')}
                >
                  {item.activities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className='p-3'>
            <h5 className='text-xl text-[#4FAFAF] font-semibold tracking-wide'>
              Inclusions
            </h5>
            <ul className='pl-4'>
              {tour.inclusions.map((incl) => (
                <li key={incl}>{incl}</li>
              ))}
            </ul>
          </div>
          <div className='bg-[#4FAFAF]/10 p-3'>
            <h6 className='text-xl text-[#4FAFAF] font-semibold tracking-wide'>
              Exclusions
            </h6>
            <ul className='pl-4'>
              {tour.exclusions.map((excl) => (
                <li key={excl}>{excl}</li>
              ))}
            </ul>
          </div>
          <div className='p-6 border'>
            <DynamicTable title='Price Table' data={tour.pricing} />
          </div>

          {tour.pricingTable && (
            <div className='p-6 border bg-[#4fafaf]/10'>
              <PricingTable pricingTable={tour.pricingTable} />
            </div>
          )}

          {tour.accomRates && (
            <div className='p-6 border bg-[#4fafaf]/10'>
              <AccomRates accomRates={tour.accomRates} />
            </div>
          )}
          <div className='max-w-md mx-auto my-10'>
            <BookForm
              title={tour.title}
              isPackage={tour.type === 'package tour'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
