import { SENDGRID_API_KEY } from "@/lib/constants";
import sgMail, { MailDataRequired } from "@sendgrid/mail";

export class EmailService {
  public static sendEmail = async (
    subject: string,
    request_data:
      | Omit<MailDataRequired, "from" | "to">
      | Omit<MailDataRequired, "from" | "to">[]
  ) => {
    sgMail.setApiKey(SENDGRID_API_KEY);
    const msg = {
      ...request_data,
      to: 'info@codagehabitation.com',
      from: 'info@codagehabitation.com', 
      subject: subject,
    } as MailDataRequired;

    try {
      const res = await sgMail.send(msg);
      return res;
    } catch (err) {
      throw new Error("Email sending failed.");
    }
  };
}
