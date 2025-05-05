import { Transfer } from '@/components/transfer';

const TourPage = () => {
  return (
    <section className='pt-12'>
      <div className='h-40 bg-[#4fafaf]'>
        <div className='max-w-3xl h-full flex-col items-center justify-center flex mx-auto'>
          <p className='text-3xl text-white font-medium'>Transfers</p>
          <span className='text-slate-200 text-xl'>
            Hassle free travel with our transfer service!
          </span>
        </div>
      </div>
      <div className='max-w-3xl mx-auto'>
        <Transfer />
      </div>
    </section>
  );
};

export default TourPage;
