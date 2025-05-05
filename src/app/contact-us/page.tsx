import { ContactForm } from '@/components/contact-form';

const ContactPage = () => {
  return (
    <section className='max-w-3xl mx-auto pt-12'>
      <div className='h-36 flex items-center justify-center'>
        <p className='text-[#4fafaf] text-2xl font-medium'>Contact Us</p>
      </div>

      <div className='bg-slate-100 p-4 mb-10'>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='w-full '>
            <h4 className='text-2xl font-medium mb-10'>
              Don&apos;t hesitate to reach us if you have concern!
            </h4>

            <p>
              Email:{' '}
              <span className='font-medium'>
                optimaltravelservices11@gmail.com
              </span>
            </p>
            <p>
              Mobile Number:{' '}
              <span className='font-medium'>(+63)960-353-9898</span>
            </p>
          </div>
          <div className='w-full bg-rose-50'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
