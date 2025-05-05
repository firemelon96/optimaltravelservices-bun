import { categories } from '@/components/about';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const AboutPage = () => {
  return (
    <section className='max-w-3xl mx-auto pt-12 px-4'>
      <div className='h-36 flex items-center justify-center'>
        <p className='text-[#4fafaf] text-2xl font-medium'>About Us</p>
      </div>

      <div className='bg-slate-100 p-4 mb-10 space-y-4'>
        <p>
          We are a reputable tour operator/DOT Accredited travel agency
          specializiing in creating unforgettable travel and event experiences
          in the beautiful province of Palawan. As a local company based in Sta.
          Monica, Puerto Princesa City, we possess extensive knowledge in
          Palawan’s tourism landscape, uniquely positioning us to assist your
          municipality in organizing and managing successful events
        </p>

        <p>
          We are Confident that our well-crafted tour packages and comprehensive
          event management services will provide your event participants with a
          memorable and eenriching experience, showcasing the natural beauty and
          cultural heritage of palawan.
        </p>
      </div>

      <Carousel className='pb-10'>
        <CarouselContent>
          {categories.map((cat) => (
            <CarouselItem key={cat.id} className=' basis-auto ml-1'>
              <div className='flex p-4 bg-slate-100 rounded-md items-center justify-center flex-col gap-1'>
                <cat.icon className='size-7' />
                <p className='leading-none'>{cat.label}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default AboutPage;
