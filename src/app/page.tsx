import { About } from '@/components/about';
import { Expeditions } from '@/components/expedition';
import { Hero } from '@/components/hero';
import { Tours } from '@/components/tours';
import { Transfer } from '@/components/transfer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tours title='Puerto Princesa' type='day tour' />
      <Tours title='Puerto Princesa' type='package tour' />
      <Tours title='El Nido' type='day tour' />
      <Tours title='El Nido' type='package tour' />
      <Tours title='Port Barton' type='day tour' />
      <Tours title='Coron' type='day tour' />
      <Tours title='Coron' type='package tour' />
      <Tours title='Balabac' type='day tour' />
      <Tours title='Balabac' type='package tour' />
      <Transfer />
      <Expeditions />
    </>
  );
}
