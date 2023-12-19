
import { EmailService } from "@/lib/api/__generated__/services/mailsending-form";
import { client } from "./contact-form";
import { Api } from "@/lib/api";
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only post request allowed" });
  }
  try {
    const data = await Api.Services.SanityClientService.createHiringRequest({
      doc: req?.body,
      client: client,
    });

    const subject = "Jamstacky Estimate Form";

    // Assuming you have some data to send in the email
    const emailContent = `
      <div><strong>${String(subject)}</strong></div>
      <div><strong>Name: </strong>${String(data?.name)}</div>
      <div><strong>Email: </strong>${String(data.email)}</div>
      <div><strong>Project type: </strong>${String(data.project_type)}</div>
      <div><strong>Message: </strong>${String(data.message)}</div>
    `;

    // Call the sendEmail method to send the email
    await EmailService.sendEmail(subject, { html: emailContent });

    return res.status(200).send(data);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).json({ message: errorMessage });
  }
}
