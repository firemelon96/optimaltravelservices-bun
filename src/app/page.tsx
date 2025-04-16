import { About } from '@/components/about';
import { Hero } from '@/components/hero';
import { Tours } from '@/components/tours';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tours title='Puerto Princesa' type='Day Tour' />
      <Tours title='Puerto Princesa' type='Package Tour' />
    </>
  );
}
