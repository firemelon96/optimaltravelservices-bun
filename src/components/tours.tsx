import { tours } from '@/data/tours';
import { HeadingName } from './heading-name';
import { TourCard } from './tour-card';

type Props = {
  title: string;
  type: 'Day Tour' | 'Package Tour';
};
export const Tours = ({ title, type }: Props) => {
  const filteredTour = tours.filter(
    (tour) =>
      tour.address.toLowerCase() === title.toLowerCase() && tour.type === type
  );
  return (
    <section className='my-10' id={title}>
      <div className='max-w-3xl mx-auto'>
        <div className='space-y-5'>
          <HeadingName title={title} />

          <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
            {filteredTour.map((_, i) => (
              <TourCard
                title='Test'
                image='https://cdn.palawanwebsolutions.com/elnido-tour-a/7-commandos.avif'
                address='puerto princesa'
                description='test descriptions'
                id='3'
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
