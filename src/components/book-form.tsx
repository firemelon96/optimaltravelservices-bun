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
import { formSchema } from '@/lib/zod-schema';
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
import { sendEmail } from '@/actions/send-email';
import { toast } from 'sonner';
import { Badge } from './ui/badge';

const types = [
  { label: 'Joiner', value: 'joiner' },
  { label: 'Private', value: 'private' },
];

interface Props {
  title: string;
  isPackage?: boolean;
}

export const BookForm = ({ isPackage = false, title }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      numOfAdults: 1,
      numOfChildren: 0,
      email: '',
      number: '',
      dateRange: {
        from: undefined,
        to: undefined,
      },
      remarks: '',
      type: 'joiner',
    },
  });

  const [state, formAction, isPending] = useActionState(
    async (prev: unknown, values: z.infer<typeof formSchema>) => {
      const result = await sendEmail({ ...values, title });

      if (result.success) {
        toast.success(result.message);
        form.reset();
      } else {
        toast.error(result.message);
      }

      return result;
    },
    { success: false, message: '' }
  );

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(() => formAction(values));
  };

  return (
    <Card className='p-4 shadow-none'>
      <p className='text-xl text-center tracking-widest font-semibold'>
        Reserve Now
      </p>
      {!state.success && <p className='text-red-500'>{state.message}</p>}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
          {isPackage ? (
            <FormField
              name='dateRange'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            disabled={isPending}
                            variant={'outline'}
                            className={cn(
                              'w-full pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value && field?.value.from ? (
                              field?.value.to ? (
                                <>
                                  {format(field.value.from, 'LLL dd, y')} -{' '}
                                  {format(field.value.to, 'LLL dd, y')}
                                </>
                              ) : (
                                format(field.value.from, 'LLL dd, y')
                              )
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          mode='range'
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          numberOfMonths={2}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : (
            <FormField
              name='dateRange'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select desired date</FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            disabled={isPending}
                            variant={'outline'}
                            className={cn(
                              'w-full pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value.from ? (
                              field.value.to ? (
                                <>{format(field.value.from, 'LLL dd, y')}</>
                              ) : (
                                format(field.value.from, 'LLL dd, y')
                              )
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          mode='range'
                          selected={field.value}
                          onSelect={(dates) => {
                            if (dates?.from) {
                              field.onChange({
                                from: dates?.from,
                                to: dates.from,
                              });
                            } else {
                              field.onChange(undefined);
                            }
                          }}
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
                      disabled={isPending}
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
                      disabled={isPending}
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
                      disabled={isPending}
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
                      disabled={isPending}
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
                      disabled={isPending}
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
                      disabled={isPending}
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
                    disabled={isPending}
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
                    disabled={isPending}
                    placeholder='Let us know what you need, allergies to food, etc.'
                    className='resize-none'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {state.success && state.message && (
            <Badge className='w-full' variant={'secondary'}>
              {state.message}
            </Badge>
          )}
          {!state.success && state.message && (
            <Badge className='w-full' variant={'destructive'}>
              {state.message}
            </Badge>
          )}

          <Button disabled={isPending} type='submit' className='w-full'>
            {isPending ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </Form>
    </Card>
  );
};
