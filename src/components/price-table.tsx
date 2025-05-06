import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatCurrency } from '@/lib/utils';

// const prices = [
//   {
//     type: 'Joiner',
//     amount: '1200',
//     description: 'Minimum of 2 person',
//   },
//   {
//     type: 'Private',
//     amount: '4500',
//     description: 'Minimum of 2 person',
//   },
// ];

type Prop = {
  pricing: {
    type: string;
    amount: number;
    promo?: number;
    description: string;
  }[];
};

export const PriceTable = ({ pricing }: Prop) => {
  return (
    <Table>
      <TableCaption>Price Table</TableCaption>
      <TableHeader>
        <TableRow className='font-medium text-xl'>
          <TableHead className='w-[100px]'>Traveller type</TableHead>
          <TableHead className='text-right'>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pricing.map((price) => (
          <TableRow key={price.type}>
            <TableCell className='font-medium'>
              {price.type}{' '}
              <span className='text-muted-foreground'>
                ({price.description})
              </span>
            </TableCell>
            <TableCell className='text-right'>
              {price.promo ? (
                <>
                  <span className='line-through text-xs text-rose-400'>
                    {formatCurrency(price.amount)}
                  </span>{' '}
                  <p className='font-medium'>{formatCurrency(price.promo)}</p>
                </>
              ) : (
                <p className='font-medium'>{formatCurrency(price.amount)}</p>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
