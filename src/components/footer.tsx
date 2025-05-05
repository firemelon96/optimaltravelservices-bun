import { MailIcon, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
export const Footer = () => {
  return (
    <footer className='bg-[#4FAFAF] '>
      <div className='max-w-3xl mx-auto py-10'>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-2 px-2'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <div className='p-2 bg-[#3f8e8e] rounded-full'>
                <MapPin className='size-6 text-white' />
              </div>
              <div>
                <p className='text-xl text-white'>
                  Sta. Monica, Puerto Princesa City,{' '}
                  <span className='font-semibold'>Palawan, Philippines</span>
                </p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <div className='p-2 rounded-full bg-[#3f8e8e]'>
                <Phone className='size-6 text-white' />
              </div>
              <div>
                <p className='text-xl font-semibold text-white'>
                  (+63)960-353-9898
                </p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <div className='p-2 rounded-full bg-[#3f8e8e]'>
                <MailIcon className='size-6 text-white' />
              </div>
              <div>
                <p className='md:text-xl font-medium text-white'>
                  optimaltravelservices11@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-xl font-semibold text-white'>
              Optimal Travel Services
            </p>

            <p className='text-justify text-white/90'>
              We are a reputable tour operator/DOT Accredited travel agency
              specializiing in creating unforgettable travel and event
              experiences in the beautiful province of Palawan. As a local
              company based in Sta. Monica, Puerto Princesa City, we possess
              extensive knowledge in Palawan’s tourism landscape, uniquely
              positioning us to assist your municipality in organizing and
              managing successful events
            </p>

            <div className='flex gap-2 text-white/80'>
              <Link
                href={'https://www.facebook.com/profile.php?id=100086484061516'}
              >
                <FaFacebook className='size-8' />
              </Link>
              <FaInstagram className='size-8' /> <FaTiktok className='size-8' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#3f8e8e]'>
        <div className='max-w-3xl mx-auto py-2'>
          <p className='text-center text-white/80'>
            &copy; {new Date().getFullYear()} Optimal Travel Services | All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
