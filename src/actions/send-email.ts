'use server';

import { formSchema } from '@/lib/zod-schema';
import { z } from 'zod';
import { Resend } from 'resend';
import ConfirmBooking from '../../emails/confirm-booking';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (values: z.infer<typeof formSchema>) => {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'failed to validate fields',
    };
  }

  const {
    dateRange,
    email,
    firstName,
    lastName,
    numOfAdults,
    number,
    remarks,
    type,
    numOfChildren,
    title,
  } = validatedFields.data;

  if (!title) return { success: false, message: 'Title is missing!' };

  try {
    await resend.emails.send({
      from: 'Optimal Travel Service <support@puertoprincesapalawantours.com>',
      to: ['optimaltravelservices11@gmail.com'],
      replyTo: email,
      subject: `Booking - ${title}`,
      react: ConfirmBooking({
        fullname: `${firstName} ${lastName}`,
        adults: numOfAdults,
        children: numOfChildren,
        dateRange,
        email,
        message: remarks,
        mobileNumber: number,
        title,
        type,
      }),
    });

    return {
      success: true,
      message: 'Booking was send successfully! Check your email for receipt',
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to send email! ${error}`,
    };
  }
};
