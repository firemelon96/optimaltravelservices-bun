import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <section className='pt-12'>
      <div className='h-40 bg-slate-300'>
        <div className='max-w-3xl h-full flex-col items-center justify-center flex mx-auto'>
          <Skeleton className='h-9 w-20' />
          <Skeleton className='h-6 w-36' />
        </div>
      </div>
      <div className='max-w-3xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className='w-30 h-40' />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;
