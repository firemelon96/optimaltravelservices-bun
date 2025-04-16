import { BookForm } from '@/components/book-form';
import { HeroCarousel } from '@/components/hero-carousel';

const SinglePage = () => {
  return (
    <section className=''>
      <div className='max-w-3xl mx-auto pt-16'>
        <div className='space-y-3'>
          <HeroCarousel />
          <div>
            <h3 className='text-xl text-amber-600 font-semibold tracking-wide'>
              title of tour
            </h3>
            <p>description of the tour will be publish here</p>
          </div>
          <div className='bg-amber-50 space-y-3 p-3'>
            <h4>Itenerary</h4>
            <div className='pl-4'>
              <p>Day 1</p>
              <ul className='pl-4'>
                <li>Airport pickup</li>
                <li>Airport pickup</li>
                <li>Airport pickup</li>
              </ul>
            </div>
            <div className='pl-4'>
              <p>Day 2</p>
              <ul className='pl-4'>
                <li>Airport pickup</li>
              </ul>
            </div>
          </div>
          <div className='p-3'>
            <h5>Inclusions</h5>
            <ul className='pl-4'>
              <li>Airport pickup</li>
              <li>Airport pickup</li>
              <li>Airport pickup</li>
            </ul>
          </div>
          <div className='bg-amber-50 p-3'>
            <h5>Exclusions</h5>
            <ul className='pl-4'>
              <li>Airport pickup</li>
              <li>Airport pickup</li>
              <li>Airport pickup</li>
            </ul>
          </div>
          <div className='max-w-md mx-auto my-10'>
            <BookForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePage;
