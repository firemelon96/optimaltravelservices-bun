'use server';

import { formSchema } from '@/lib/zod-schema';
import { z } from 'zod';

export const sendEmail = (values: z.infer<typeof formSchema>) => {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'failed to validate fields',
    };
  }

  //   const {
  //     dateRange,
  //     email,
  //     firstName,
  //     lastName,
  //     numOfAdults,
  //     number,
  //     remarks,
  //     type,
  //     numOfChildren,
  //     title,
  //   } = validatedFields.data;
};
