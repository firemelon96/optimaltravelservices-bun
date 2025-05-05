import { z } from 'zod';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const formSchema = z.object({
  title: z.string().optional(),
  firstName: z
    .string()
    .min(2, { message: 'Firtname should be more than 2 characters' }),
  lastName: z
    .string()
    .min(2, { message: 'Latname should be more than 2 characters' }),
  numOfAdults: z.coerce.number().positive(),
  numOfChildren: z.coerce.number().optional(),
  email: z.string().email(),
  number: z.string().refine(
    (value) => {
      const phoneNumber = parsePhoneNumberFromString(value || '');
      return phoneNumber?.isValid();
    },
    { message: 'Invalid Phone Number' }
  ),
  dateRange: z.object({
    from: z.coerce.date(),
    to: z.coerce.date(),
  }),
  remarks: z.string(),
  type: z.string(),
});

export const transferFormSchema = z.object({
  title: z.string().optional(),
  firstName: z
    .string()
    .min(2, { message: 'Firtname should be more than 2 characters' }),
  lastName: z
    .string()
    .min(2, { message: 'Latname should be more than 2 characters' }),
  numOfAdults: z.coerce.number().positive(),
  numOfChildren: z.coerce.number().optional(),
  email: z.string().email(),
  number: z.string().refine(
    (value) => {
      const phoneNumber = parsePhoneNumberFromString(value || '');
      return phoneNumber?.isValid();
    },
    { message: 'Invalid Phone Number' }
  ),
  time: z.string().min(1, { message: 'Please select departure time' }),
  date: z.date(),
  remarks: z.string(),
  type: z.string(),
});

export const FormSchema = z.object({
  fullname: z.string().min(1, { message: 'Please fill in your name' }),
  email: z.string().email({ message: 'Provide a valid email' }),
  message: z
    .string()
    .min(20, { message: 'Minimun of 20 characters' })
    .max(100, { message: 'Do not exceed 100 characters' }),
});
