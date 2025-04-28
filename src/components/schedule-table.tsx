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
  schedules: { type: string; departures: string[]; price: number }[];
};

export const ScheduleTable = ({ schedules }: Prop) => {
  return (
    <Table>
      <TableCaption>Schedule</TableCaption>
      <TableHeader>
        <TableRow className='font-medium text-xl'>
          <TableHead className=''>Type</TableHead>
          <TableHead>Departure</TableHead>
          <TableHead className='text-right'>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {schedules.map((sched) => (
          <TableRow key={sched.type}>
            <TableCell className='font-medium'>{sched.type} </TableCell>
            <TableCell>
              <ul>
                {sched.departures.map((dep) => (
                  <li key={dep}>{dep}</li>
                ))}
              </ul>
            </TableCell>
            <TableCell className='text-right'>
              {formatCurrency(sched.price)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
