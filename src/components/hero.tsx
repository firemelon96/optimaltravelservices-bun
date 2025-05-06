import { HeroCarousel } from './hero-carousel';

export const Hero = () => {
  return (
    <section id='#'>
      <div className='relative'>
        <HeroCarousel
          className='rounded-none'
          images={[
            'https://cdn.palawanwebsolutions.com/hero-images/balabac.avif',
            'https://cdn.palawanwebsolutions.com/hero-images/underground-river.avif',
            'https://cdn.palawanwebsolutions.com/hero-images/port-barton.avif',
            'https://cdn.palawanwebsolutions.com/hero-images/elnido.avif',
            'https://cdn.palawanwebsolutions.com/hero-images/coron.avif',
          ]}
        />

        <div className='absolute inset-0 bg-black/15 z-30 '></div>

        <div className='absolute  inset-0 z-40 max-w-4xl mx-auto'>
          <div className='flex flex-col gap-4 items-center justify-center h-full'>
            <h1 className='md:text-6xl text-4xl text-center uppercase font-bold tracking-wide text-white'>
              Optimal Travel Services
            </h1>
            <p className='text-3xl text-center font-semibold tracking-widest text-white'>
              Explore... Relax... Unwind...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
