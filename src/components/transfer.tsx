import { transfers } from '@/data/transfers';
import { HeadingName } from './heading-name';
import { TransferCard } from './transfer-card';

export const Transfer = () => {
  return (
    <section id='transfer' className='my-10'>
      <div className='max-w-3xl mx-auto'>
        <div className='space-y-5'>
          <HeadingName title='Transfer services' />
          <div className='grid grid-cols-1 gap-2 md:grid-cols-3 px-2'>
            {transfers.map((transfer) => (
              <TransferCard
                title={transfer.title}
                image={transfer.images[0]}
                description={transfer.description}
                id={transfer.id}
                key={transfer.id}
                pricing={transfer.pricing}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
