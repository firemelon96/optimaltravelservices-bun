import { BookTransferForm } from '@/components/book-transfer-form';
import { HeroCarousel } from '@/components/hero-carousel';
import { expeditions } from '@/data/expeditions';
import { getExpedition } from '@/lib/utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return expeditions.map(({ id }) => ({ id }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const expedition = getExpedition(id);

  if (!expedition) return {};

  return {
    title: expedition.title,
    description: expedition.description,
    openGraph: {
      images: [{ url: expedition.images[0] }],
    },
  };
}

const SinglePage = async ({ params }: Props) => {
  const { id } = await params;
  const expedition = getExpedition(id);

  if (!expedition) return notFound();

  return (
    <section className=''>
      <div className='max-w-3xl mx-auto pt-16'>
        <div className='space-y-3 px-2'>
          <HeroCarousel images={expedition.images} />
          <div>
            <h3 className='text-xl text-[#4FAFAF] font-semibold tracking-wide'>
              {expedition.title}
            </h3>
            <p>{expedition.description}</p>
          </div>
          <div className='bg-[#4FAFAF]/50 space-y-3 p-3'>
            <h4 className='text-xl text-[#4FAFAF] font-semibold tracking-wide'>
              Itenerary
            </h4>
            {expedition.itinerary?.map((item) => (
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
            <h5 className='text-xl text-[#4FAFAF] font-semibold tracking-wide'>
              Inclusions
            </h5>
            <ul className='pl-4'>
              {expedition.inclusions.map((incl) => (
                <li key={incl}>{incl}</li>
              ))}
            </ul>
          </div>
          <div className='bg-[#4FAFAF]/50 p-3'>
            <h6 className='text-xl text-[#4FAFAF] font-semibold tracking-wide'>
              Exclusions
            </h6>
            <ul className='pl-4'>
              {expedition.exclusions.map((excl) => (
                <li key={excl}>{excl}</li>
              ))}
            </ul>
          </div>

          <div className='max-w-md mx-auto my-10'>
            <BookTransferForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
