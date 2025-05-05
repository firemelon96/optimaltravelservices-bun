import { Tours } from '@/components/tours';

const TourPage = () => {
  return (
    <section className='pt-12'>
      <div className='h-40 bg-[#4fafaf]'>
        <div className='max-w-3xl h-full flex-col items-center justify-center flex mx-auto'>
          <p className='text-3xl text-white font-medium'>Port Barton Tours</p>
          <span className='text-slate-200 text-xl'>
            Explore Port Barton Beaches!
          </span>
        </div>
      </div>
      <div className='max-w-3xl mx-auto'>
        <Tours title='Port Barton' type='day tour' />
      </div>
    </section>
  );
};

export default TourPage;
