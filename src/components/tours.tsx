import { tours } from '@/data/tours';
import { HeadingName } from './heading-name';
import { TourCard } from './tour-card';

type Props = {
  title: string;
  type: 'day tour' | 'package tour';
};
export const Tours = ({ title, type }: Props) => {
  const filteredTour = tours.filter(
    (tour) =>
      tour.destination.toLowerCase() === title.toLowerCase() &&
      tour.type === type
  );
  return (
    <section className='my-10' id={title}>
      <div className='max-w-3xl mx-auto'>
        <div className='space-y-5'>
          <HeadingName title={`${title} ${type}`} />

          <div className='grid grid-cols-1 gap-2 md:grid-cols-3 px-2'>
            {filteredTour.map((tour) => (
              <TourCard
                pricing={tour.pricing}
                title={tour.title}
                image={tour.images[0]}
                address={tour.destination}
                description={tour.description}
                id={tour.id}
                key={tour.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
