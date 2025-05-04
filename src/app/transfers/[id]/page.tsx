import { BookTransferForm } from '@/components/book-transfer-form';
import { HeroCarousel } from '@/components/hero-carousel';
import { ScheduleTable } from '@/components/schedule-table';
import { transfers } from '@/data/transfers';
import { getTransfer } from '@/lib/utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return transfers.map(({ id }) => ({ id }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const transfer = getTransfer(id);

  if (!transfer) return {};

  return {
    title: transfer.title,
    description: transfer.description,
    openGraph: {
      images: [{ url: transfer.images[0] }],
    },
  };
}

const SinglePage = async ({ params }: Props) => {
  const { id } = await params;
  const transfer = getTransfer(id);

  if (!transfer) return notFound();

  return (
    <section className=''>
      <div className='max-w-3xl mx-auto pt-16'>
        <div className='space-y-3 px-2'>
          <HeroCarousel images={transfer.images} />
          <div>
            <h3 className='text-xl text-[#4FAFAF] font-semibold tracking-wide'>
              {transfer.title}
            </h3>
            <p>{transfer.description}</p>
          </div>
          <div className='p-3'>
            <h5 className='text-xl text-[#4FAFAF] font-semibold tracking-wide'>
              Inclusions
            </h5>
            <ul className='pl-4'>
              {transfer.inclusions.map((incl) => (
                <li key={incl}>{incl}</li>
              ))}
            </ul>
          </div>
          <div className='bg-[#4FAFAF]/50 p-3'>
            <h6 className='text-xl text-[#4FAFAF] font-semibold tracking-wide'>
              Exclusions
            </h6>
            <ul className='pl-4'>
              {transfer.exclusions.map((excl) => (
                <li key={excl}>{excl}</li>
              ))}
            </ul>
          </div>
          <div className='p-6 border'>
            <ScheduleTable schedules={transfer.schedule} />
          </div>
          <div className='max-w-md mx-auto my-10'>
            <BookTransferForm
              title={transfer.title}
              times={transfer.schedule[0].departures}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
