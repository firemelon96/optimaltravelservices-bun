'use client';

import { useForm } from 'react-hook-form';
import { Card, CardContent } from './ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { startTransition, useActionState } from 'react';
import { contactFormSend } from '@/actions/contact-form';
import { toast } from 'sonner';
import { FormSchema } from '@/lib/zod-schema';
import { Badge } from './ui/badge';

export type FormValues = z.infer<typeof FormSchema>;

export const ContactForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullname: '',
      email: '',
      message: '',
    },
  });

  const [state, formAction, isPending] = useActionState(
    async (prev: unknown, values: FormValues) => {
      const result = await contactFormSend(values);

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

  const onSubmit = (values: FormValues) => {
    startTransition(() => formAction(values));
  };

  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              name='fullname'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder='Enter your full name'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='email'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isPending}
                      {...field}
                      placeholder='Example@email.com'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='message'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your message</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={isPending}
                      {...field}
                      placeholder='Tell us your concern'
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

            <Button disabled={isPending}>
              {isPending ? 'Sending...' : 'Send'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
