import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatCurrency, splitAndUppercase } from '@/lib/utils';

type Prop = {
  data: Record<string, string | number | undefined>[];
  withFooter?: boolean;
  title: string;
};

export const DynamicTable = ({ data, title, withFooter = false }: Prop) => {
  const columns = Object.keys(data[0]);
  return (
    <Table>
      <TableCaption>{title}</TableCaption>
      <TableHeader>
        <TableRow className='font-medium bg-muted'>
          {columns.map((col) => (
            <TableHead key={col}>{splitAndUppercase(col)}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={i}>
            {columns.map((col) => (
              <TableCell key={col} className='font-medium'>
                {typeof row[col] === 'string'
                  ? splitAndUppercase(row[col])
                  : typeof row[col] === 'undefined'
                    ? 'No promo'
                    : formatCurrency(row[col])}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      {withFooter && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} className='text-center'>
              <p>MO2 Westown Lagoon & Zuri Resort</p>
              <span className='text-muted-foreground'>
                **Additional P500 room/night during peak season
              </span>
            </TableCell>
            <TableCell colSpan={2} className='text-center'>
              <p>Peak Season</p>
              <div className='text-muted-foreground'>
                <p>Christmas & New Year</p>
                <p>Chinese New Year</p>
                <p>Holy Week</p>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
};
