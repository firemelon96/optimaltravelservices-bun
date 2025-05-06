'use server';

import { FormValues } from '@/components/contact-form';
import { Resend } from 'resend';
import ContactEmail from '../../emails/contact-email';
import { FormSchema } from '@/lib/zod-schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactFormSend = async (values: FormValues) => {
  const validatedFields = FormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, message: 'Invalid data' };
  }

  const { fullname, message, email } = validatedFields.data;

  try {
    await resend.emails.send({
      from: 'Optimal Travel Service <support@puertoprincesapalawantours.com>',
      to: ['optimaltravelservices11@gmail.com'],
      replyTo: email,
      subject: 'New Message from Website',
      react: ContactEmail({ email, fullname, message }),
    });

    return { success: true, message: 'Message was sent Successfully!' };
  } catch (error) {
    return { success: false, message: `Internal server error ${error}` };
  }
};
