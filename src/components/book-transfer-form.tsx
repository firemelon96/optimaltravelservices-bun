'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { transferFormSchema } from '@/lib/zod-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from './ui/calendar';
import PhoneInput from 'react-phone-number-input';
import { cn } from '@/lib/utils';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { startTransition, useActionState } from 'react';
import { sendTransfer } from '@/actions/send-transfer';
import { toast } from 'sonner';

const types = [
  { label: 'Joiner', value: 'joiner' },
  { label: 'Private', value: 'private' },
];

interface Props {
  times?: string[];
  title: string;
}

export const BookTransferForm = ({ times, title }: Props) => {
  const form = useForm<z.infer<typeof transferFormSchema>>({
    resolver: zodResolver(transferFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      numOfAdults: 1,
      numOfChildren: 0,
      email: '',
      number: '',
      date: undefined,
      remarks: '',
      type: 'joiner',
      time: '',
    },
  });

  const date = form.watch('date');

  const [state, formAction, isPending] = useActionState(
    async (prev: any, values: z.infer<typeof transferFormSchema>) => {
      const result = await sendTransfer({ ...values, title });
      if (result.success) {
        toast.success(result.message);
        form.reset();
      } else {
        toast.error(result.message);
      }
      return result;
    },
    {
      success: false,
      message: '',
    }
  );

  const onSubmit = (values: z.infer<typeof transferFormSchema>) => {
    startTransition(() => formAction(values));
  };

  return (
    <Card className='p-4 shadow-none'>
      <p className='text-xl text-center tracking-widest font-semibold'>
        Reserve Now
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
          <FormField
            name='date'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <FormControl>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'LLL dd, y')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {date && times && (
            <FormField
              name='time'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Departure time</FormLabel>
                  <FormControl>
                    <div className='flex gap-2 flex-wrap'>
                      {times.map((time) => (
                        <Button
                          key={time}
                          type='button'
                          size={'sm'}
                          variant={field.value === time ? 'default' : 'outline'}
                          onClick={() => field.onChange(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <div className='flex flex-col gap-2 md:flex-row'>
            <FormField
              name='firstName'
              control={form.control}
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      {...field}
                      placeholder='Enter your firstname'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='lastName'
              control={form.control}
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      {...field}
                      placeholder='Enter your lastname'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex flex-row gap-2'>
            <FormField
              name='numOfAdults'
              control={form.control}
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Number of Adults</FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      {...field}
                      placeholder='Enter number of adults'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='numOfChildren'
              control={form.control}
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Numbor of Children</FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      {...field}
                      placeholder='Enter number of children'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='flex flex-col gap-2 md:flex-row'>
            <FormField
              name='email'
              control={form.control}
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type='email'
                      {...field}
                      placeholder='Enter number of adults'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='number'
              control={form.control}
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Whatsapp number</FormLabel>
                  <FormControl>
                    <PhoneInput
                      {...field}
                      international
                      defaultCountry='PH'
                      placeholder='e.g. 09171234567'
                      className='[&>input]:border-input [&>input]:bg-background [&>input]:placeholder:text-muted-foreground [&>input]:focus-visible:ring-ring w-full [&>input]:w-full [&>input]:rounded-md [&>input]:border [&>input]:px-3 [&>input]:py-2 [&>input]:text-sm [&>input]:shadow-xs [&>input]:focus-visible:ring-1 [&>input]:focus-visible:outline-none'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            name='type'
            control={form.control}
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Select your type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex'
                  >
                    {types.map((type) => (
                      <FormItem
                        key={type.value}
                        className='flex items-center space-y-0'
                      >
                        <FormControl>
                          <RadioGroupItem value={type.value} />
                        </FormControl>
                        <FormLabel className='font-normal'>
                          {type.label}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name='remarks'
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Remarks</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Let us know what you need, allergies to food, etc.'
                    className='resize-none'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='w-full'>
            Submit
          </Button>
        </form>
      </Form>
    </Card>
  );
};
