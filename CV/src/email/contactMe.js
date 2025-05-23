import { Resend } from "resend";
import { emailSample } from "./email";
import { toast } from "react-toastify";

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const contactMe = async (name, email, message) => {
  try {
    //onboarding@resend.dev
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "adrianny90@wp.pl",
      subject: "CV Job Allert",
      html: emailSample(name, email, message),
    });
    toast.success(`${name} sent successfully email to Adrian. Thank you.`);
  } catch (error) {
    throw new Error("Error sending email");
  }
};
