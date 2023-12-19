import { SANITY_API_TOKEN } from "@/lib/constants";
import { SanityDocument } from "@sanity/client";
import { EmailService } from "@/lib/api/__generated__/services/mailsending-form";
import { SanityClientServiceResponse } from "@/lib/api/__generated__/services/sanity-client-service";
import { Api } from "@/lib/api";
import { NextApiRequest, NextApiResponse } from "next";
import { getClient } from "@/lib/sanity";
export type HiringRequestResponseData = SanityClientServiceResponse<
  SanityDocument<Record<string, any>>
>;

export const client = getClient(SANITY_API_TOKEN);

export default async function handler(
  req: Omit<NextApiRequest, "body"> & { body: HiringRequestResponseData },
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only post request allowed" });
  }
  try {
    const data =
      await Api.Services.SanityClientService.createMessageSendRequest({
        doc: req?.body,
        client: client,
      });

    const subject = "Jamstacky Contact Form";

    const contactContent = `
      <div><strong>${String(subject)}</strong></div>
      <div><strong>First Name: </strong>${String(data?.first_name)}</div>
      <div><strong>Last Name: </strong>${String(data?.last_name)}</div>
      <div><strong>Phone Number: </strong>${String(data?.phone_number)}</div>
      <div><strong>Email: </strong>${String(data.email)}</div>
      <div><strong>Project type: </strong>${String(data.project_type)}</div>
      <div><strong>Message: </strong>${String(data.message)}</div>
    `;
    await EmailService.sendEmail(subject, { html: contactContent });

    return res.status(200).send(data);
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).json({ message: errorMessage });
  }
}
