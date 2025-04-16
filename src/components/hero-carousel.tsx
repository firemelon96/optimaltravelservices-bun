// components/HeroCarousel.tsx
'use client';

import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

const images = [
  'https://cdn.palawanwebsolutions.com/elnido-tour-a/7-commandos.avif',
  'https://cdn.palawanwebsolutions.com/elnido-tour-a/shimizu-island.avif',
  'https://cdn.palawanwebsolutions.com/elnido-tour-a/secret-lagoon.avif',
];

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className=' overflow-hidden'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index} className='aspect-video relative'>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className='object-cover'
              priority={index === 0}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
