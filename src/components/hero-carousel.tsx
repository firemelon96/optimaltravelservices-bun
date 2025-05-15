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
import { cn } from '@/lib/utils';

// const images = [
// 'https://cdn.palawanwebsolutions.com/elnido-tour-a/7-commandos.avif',
// 'https://cdn.palawanwebsolutions.com/elnido-tour-a/shimizu-island.avif',
// 'https://cdn.palawanwebsolutions.com/elnido-tour-a/secret-lagoon.avif',
// ];

interface Props {
  images: string[];
  className?: string;
}

export function HeroCarousel({ images, className }: Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className={cn('overflow-hidden rounded-md', className)}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {images?.map((src, index) => (
          <CarouselItem
            key={index}
            className={cn('md:aspect-video aspect-square relative', className)}
          >
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              className='object-cover'
              priority={index === 0}
              unoptimized
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
