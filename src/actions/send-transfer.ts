'use server';

import { transferFormSchema } from '@/lib/zod-schema';
import { z } from 'zod';
import { Resend } from 'resend';
import ConfirmTransfer from '../../emails/confirm-transfer';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTransfer = async (
  values: z.infer<typeof transferFormSchema>
) => {
  const validatedFields = transferFormSchema.safeParse(values);

  console.log(validatedFields.data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'failed to validate fields',
    };
  }

  const {
    date,
    email,
    firstName,
    lastName,
    numOfAdults,
    number,
    remarks,
    type,
    numOfChildren,
    title,
    time,
  } = validatedFields.data;

  if (!title) return { success: false, message: 'Title is missing!' };

  // return { success: false, message: 'something went not right' };

  try {
    await resend.emails.send({
      from: 'Optimal Travel Service <support@puertoprincesapalawantours.com>',
      to: ['almujahid.ibno.jamion@gmail.com'],
      replyTo: email,
      subject: `Booking - ${title}`,
      react: ConfirmTransfer({
        adults: numOfAdults,
        date,
        email,
        fullname: `${firstName} ${lastName}`,
        message: remarks,
        mobileNumber: number,
        title,
        type,
        time,
        children: numOfChildren,
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
