import { BookTransferForm } from '@/components/book-transfer-form';
import { HeroCarousel } from '@/components/hero-carousel';
import { ScheduleTable } from '@/components/schedule-table';
import { getTransfer } from '@/lib/utils';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

const SinglePage = async ({ params }: Props) => {
  const { id } = await params;
  const transfer = getTransfer(id);

  if (!transfer) return notFound();

  return (
    <section className=''>
      <div className='max-w-3xl mx-auto pt-16'>
        <div className='space-y-3'>
          <HeroCarousel images={transfer.images} />
          <div>
            <h3 className='text-xl text-amber-600 font-semibold tracking-wide'>
              {transfer.title}
            </h3>
            <p>{transfer.description}</p>
          </div>
          <div className='p-3'>
            <h5 className='text-xl text-amber-600 font-semibold tracking-wide'>
              Inclusions
            </h5>
            <ul className='pl-4'>
              {transfer.inclusions.map((incl) => (
                <li key={incl}>{incl}</li>
              ))}
            </ul>
          </div>
          <div className='bg-amber-50 p-3'>
            <h6 className='text-xl text-amber-600 font-semibold tracking-wide'>
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
            <BookTransferForm times={transfer.schedule[0].departures} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
