import { BookForm } from '@/components/book-form';
import { HeroCarousel } from '@/components/hero-carousel';
import { PriceTable } from '@/components/price-table';
import { getTour } from '@/lib/utils';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

const SinglePage = async ({ params }: Props) => {
  const { id } = await params;
  const tour = getTour(id);

  if (!tour) return notFound();

  return (
    <section className=''>
      <div className='max-w-3xl mx-auto pt-16'>
        <div className='space-y-3'>
          <HeroCarousel images={tour.images} />
          <div>
            <h3 className='text-xl text-amber-600 font-semibold tracking-wide'>
              {tour.title}
            </h3>
            <p>{tour.description}</p>
          </div>
          <div className='bg-amber-50 space-y-3 p-3'>
            <h4 className='text-xl text-amber-600 font-semibold tracking-wide'>
              Itenerary
            </h4>
            {tour.itinerary?.map((item) => (
              <div key={item.title} className='pl-4'>
                <p>{`Day ${item.day}: ${item.title}`}</p>
                <ul className='pl-4'>
                  {item.activities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className='p-3'>
            <h5 className='text-xl text-amber-600 font-semibold tracking-wide'>
              Inclusions
            </h5>
            <ul className='pl-4'>
              {tour.inclusions.map((incl) => (
                <li key={incl}>{incl}</li>
              ))}
            </ul>
          </div>
          <div className='bg-amber-50 p-3'>
            <h6 className='text-xl text-amber-600 font-semibold tracking-wide'>
              Exclusions
            </h6>
            <ul className='pl-4'>
              {tour.exclusions.map((excl) => (
                <li key={excl}>{excl}</li>
              ))}
            </ul>
          </div>
          <div className='p-6 border'>
            <PriceTable pricing={tour.pricing} />
          </div>
          <div className='max-w-md mx-auto my-10'>
            <BookForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
