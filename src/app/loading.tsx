import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <section className=''>
      <div className='max-w-3xl mx-auto pt-16'>
        <div className='space-y-3 px-2'>
          <Skeleton className='md:aspect-video aspect-square' />
          <Skeleton className='h-8 w-40' />
          <Skeleton className='h-6 w-full' />
          <Skeleton className='h-6 w-full' />
          <div className='bg-[#4FAFAF]/50 space-y-3 p-3'>
            <Skeleton className='h-8 w-60' />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className='pl-4 space-y-2'>
                <Skeleton className='h-6 w-40' />
                <ul className='pl-4 space-y-2'>
                  {Array.from({ length: 2 }).map((_, i) => (
                    <li key={i}>
                      <Skeleton className='h-6 w-40' />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className='space-y-3 p-3'>
            <Skeleton className='h-8 w-60' />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className='pl-4 space-y-2'>
                <Skeleton className='h-6 w-40' />
                <ul className='pl-4 space-y-2'>
                  {Array.from({ length: 2 }).map((_, i) => (
                    <li key={i}>
                      <Skeleton className='h-6 w-40' />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
