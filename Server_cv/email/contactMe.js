import { Resend } from "resend";
import { emailSample } from "./email.js";
import { toast } from "react-toastify";

const resend = new Resend(process.env.RESEND_API_KEY);

export const contactMe = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    //onboarding@resend.dev
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "adrianny90@wp.pl",
      subject: "CV Job Allert",
      html: emailSample(name, email, message),
    });
    toast.success(`${name} sent successfully email to Adrian. Thank you.`);
    res.status(201).json("message: success");
  } catch (error) {
    throw new Error("Error sending email");
  }
};
