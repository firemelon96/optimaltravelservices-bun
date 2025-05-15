import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatCurrency, splitAndUppercase } from '@/lib/utils';

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
  accomRates: Record<string, string | number>[];
};

export const AccomRates = ({ accomRates }: Prop) => {
  const columns = Object.keys(accomRates[0]);

  return (
    <Table>
      <TableCaption>Accommodations/Rates</TableCaption>
      <TableHeader>
        <TableRow className='font-bold text-base'>
          {columns.map((col, i) => (
            <TableHead key={`${col}-${i}`}>{splitAndUppercase(col)}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {accomRates?.map((row, i) => (
          <TableRow className='' key={i}>
            {columns.map((col) => (
              <TableCell key={col} className='font-medium'>
                {typeof row[col] === 'string'
                  ? row[col]
                  : formatCurrency(row[col])}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
