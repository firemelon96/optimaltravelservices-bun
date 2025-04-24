import {
  Building,
  Bus,
  Calendar,
  Handshake,
  MountainSnow,
  Palmtree,
  Puzzle,
  School,
  Ticket,
  Trophy,
} from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { FaSuitcase } from 'react-icons/fa';

const categories = [
  {
    id: '01',
    label: 'Island Hopping Tour',
    icon: Palmtree,
  },
  {
    id: '02',
    label: 'Adventure Tour',
    icon: MountainSnow,
  },
  {
    id: '03',
    label: 'City Tour',
    icon: Building,
  },
  {
    id: '04',
    label: 'Educational Tour',
    icon: School,
  },
  {
    id: '05',
    label: 'Company Team Building',
    icon: Handshake,
  },
  {
    id: '06',
    label: 'Conference & Travel Organizing',
    icon: Calendar,
  },
  {
    id: '07',
    label: 'Transportation',
    icon: Bus,
  },
  {
    id: '08',
    label: 'Sports Travel',
    icon: Trophy,
  },
  {
    id: '09',
    label: 'Family Vacation',
    icon: FaSuitcase,
  },
  {
    id: '10',
    label: 'Customized Packages',
    icon: Puzzle,
  },
  {
    id: '11',
    label: 'Group Discounts',
    icon: Ticket,
  },
];

export const About = () => {
  return (
    <section id='about' className='my-10 text-center px-2'>
      <div className='max-w-3xl mx-auto space-y-5'>
        <h1 className='text-xl text-amber-600 font-semibold'>
          Welcome to Optimal Travel Services
        </h1>
        <p className='text-justify'>
          We are a reputable tour operator/DOT Accredited travel agency
          specializiing in creating unforgettable travel and event experiences
          in the beautiful province of Palawan. As a local company based in Sta.
          Monica, Puerto Princesa City, we possess extensive knowledge in
          Palawan’s tourism landscape, uniquely positioning us to assist your
          municipality in organizing and managing successful events
        </p>
        <h2 className='text-xl text-amber-600 font-semibold'>
          Our Diverse Offerings Include
        </h2>

        <Carousel>
          <CarouselContent>
            {categories.map((cat) => (
              <CarouselItem key={cat.id} className=' basis-auto ml-1'>
                <div className='flex p-4 bg-muted rounded-md items-center justify-center flex-col gap-2'>
                  <cat.icon className='size-7' />
                  <p className='leading-none'>{cat.label}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
