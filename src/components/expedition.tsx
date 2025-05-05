import { HeadingName } from './heading-name';
import { ExpeditionCard } from './expedition-card';
import { expeditions } from '@/data/expeditions';

export const Expeditions = () => {
  return (
    <section id='expeditions' className='my-10'>
      <div className='max-w-3xl mx-auto'>
        <div className='space-y-5'>
          <HeadingName title='Expeditions' />
          <div className='grid grid-cols-1 gap-2 md:grid-cols-3 px-2'>
            {expeditions.map((expe) => (
              <ExpeditionCard
                title={expe.title}
                image={expe.images[0]}
                description={expe.description}
                id={expe.id}
                key={expe.id}
                pricing={expe.pricing}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
