"use server";
import { Resend } from "resend";

type FormState = {
  message: string;
  error: boolean;
};

export const ContactMeAction = async (
  formState: FormState,
  formData: FormData
): Promise<FormState> => {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const resend = new Resend(RESEND_API_KEY);

  const email = formData.get("email");
  const name = formData.get("name");
  const message = formData.get("message");

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "raghavendrabhat2018@gmail.com",
      subject: `Email from Mr/Ms ${name}.`,
      html: `
      <h1>From ${email}</h1>
      <p>${message}</p>`,
    });
    return { error: false, message: "Message sent successfully" };
  } catch (error) {
    return { error: true, message: "Failed to send email.Try again later" };
  }
};
