"use server";

import db from "@/server/db";
import { contactForm } from "@/server/db/schema";
import { telegramMessageSender } from "@/server/configs/telegram";
import env from "@/configs/env";

interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

async function sendTelegramMessage({ name, email, message }: ContactFormPayload) {
  const formattedMessage = `
    📬 <b>New Contact Form Submission </b>
    🤖 <b>Name:</b>
    ${name}
    📧<b>Email:</b>
    ${email}
    🗨️<b>Message:</b>
    ${message}
  `;
  return await telegramMessageSender(formattedMessage);
}

export async function submitContactForm(state: any, formData: FormData) {
  try {
    const submitterName = formData.get("name")?.toString() || "";
    const submitterEmail = formData.get("email")?.toString() || "";
    const submitterMessage = formData.get("message")?.toString() || "";

    if (!submitterName || !submitterEmail || !submitterMessage) return { submitted: false };

    const submissionPayload = { name: submitterName, email: submitterEmail, message: submitterMessage };

    const [databaseInsertResult, telegramMessageSent, emailSent] = await Promise.all([
      db.insert(contactForm).values(submissionPayload).returning(),
      sendTelegramMessage(submissionPayload),
      sendContactFormEmail(submissionPayload),
    ]);

    if (Array.isArray(databaseInsertResult) && databaseInsertResult[0]?.id && telegramMessageSent && emailSent) {
      return { submitted: true };
    }

    return { submitted: false };
  } catch (error) {
    console.error(error);
    return { submitted: false };
  }
}

async function sendContactFormEmail({ name, email, message }: ContactFormPayload) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": env.brevoApiKey,
    },
    body: JSON.stringify({
      params: { NAME: name },
      templateId: 1,
      to: [{ email }],
    }),
  };

  const res = await fetch("https://api.brevo.com/v3/smtp/email", options);
  const emailSent = await res.json();
  // check respose is 201 or not
  console.log("status", res.status);
  return emailSent;
}
