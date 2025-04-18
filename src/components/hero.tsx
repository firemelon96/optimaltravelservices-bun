import { HeroCarousel } from './hero-carousel';

export const Hero = () => {
  return (
    <section id='#'>
      <div className='aspect-video relative'>
        <HeroCarousel />

        <div className='absolute inset-0 bg-amber-600/45 z-30 '></div>

        <div className='absolute  inset-0 z-40 max-w-4xl mx-auto'>
          <div className='flex flex-col gap-4 items-center justify-center h-full'>
            <h1 className='md:text-6xl text-4xl text-center uppercase font-medium tracking-wide text-white'>
              Optimal Travel Services
            </h1>
            <p className='text-3xl font-light tracking-widest text-white'>
              Explore, Relax, Unwind
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
