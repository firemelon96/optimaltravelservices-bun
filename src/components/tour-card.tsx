import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/utils';

interface CardProps {
  image: string;
  title: string;
  address: string;
  id: string;
  description: string;
  pricing: {
    type: string;
    amount: number;
    promo?: number;
    description?: string;
    currency: string;
  }[];
}

export const TourCard = ({
  image,
  title,
  description,
  address,
  id,
  pricing,
}: CardProps) => {
  const name = address.toLowerCase().split(',')[0].split(' ').join('-');
  const initialPrice = pricing[0].amount;
  const promoPrice = pricing[0].promo;
  return (
    <Card className='p-1'>
      <div className=' w-full gap-2 p-2 space-y-2'>
        <div className='relative h-60 w-full overflow-hidden rounded-md'>
          <Image src={image} fill alt={title} className='object-cover' />
        </div>
        <div className='w-full '>
          <p className='text-muted-foreground text-xs '>
            Private Tour | Group (Joiner) Tour
          </p>
          <h4 className='truncate text-xl font-bold text-teal-800 uppercase'>
            {title}
          </h4>
          <p className='text-primary line-clamp-3 overflow-hidden text-base text-ellipsis '>
            {description}
          </p>
          <hr className='border border-[#06988B]/45' />
          <div className='flex h-auto items-center justify-between md:flex-row '>
            <div className=''>
              <span className='text-xs'>Starting from</span>
              {promoPrice ? (
                <p className='text-base font-bold '>
                  <span className='line-through text-xs font-medium text-rose-400'>
                    {formatCurrency(initialPrice)}
                  </span>{' '}
                  {formatCurrency(promoPrice)}
                </p>
              ) : (
                <p className='text-base font-bold '>
                  {formatCurrency(initialPrice)}
                </p>
              )}
            </div>
            <Button className=''>
              <Link href={`/${name}/${id}`}>More Details</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
