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
  pricingTable?: {
    label: string;
    pax1: number;
    pax2: number;
    pax3: number;
    pax4: number;
    pax5: number;
  }[];
};

export const PricingTable = ({ pricingTable }: Prop) => {
  return (
    <Table>
      <TableCaption>Private tour price</TableCaption>
      <TableHeader>
        <TableRow className='font-medium text-xl'>
          <TableHead className='w-[100px]'>Private Tours</TableHead>
          <TableHead className='text-right'>Pax 1-2</TableHead>
          <TableHead className='text-right'>Pax 3-4</TableHead>
          <TableHead className='text-right'>Pax 5-6</TableHead>
          <TableHead className='text-right'>Pax 7-8</TableHead>
          <TableHead className='text-right'>Pax 9-10</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pricingTable?.map((price) => (
          <TableRow key={price.label}>
            <TableCell className='font-medium'>{price.label}</TableCell>
            <TableCell className='text-right'>
              {formatCurrency(price.pax1)}
            </TableCell>
            <TableCell className='text-right'>
              {formatCurrency(price.pax2)}
            </TableCell>
            <TableCell className='text-right'>
              {formatCurrency(price.pax3)}
            </TableCell>
            <TableCell className='text-right'>
              {formatCurrency(price.pax4)}
            </TableCell>
            <TableCell className='text-right'>
              {formatCurrency(price.pax5)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
