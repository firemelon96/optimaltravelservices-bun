import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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
  pricing: { type: string; amount: number; description: string }[];
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
            <TableCell className='text-right'>{price.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
