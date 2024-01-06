"use server";

import db from "@/server/db";
import { contactForm } from "@/server/db/schema";
import { telegramMessageSender } from "@/server/configs/telegram";

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

    if (!submitterName || !submitterEmail || !submitterMessage) return;

    const submissionPayload = { name: submitterName, email: submitterEmail, message: submitterMessage };
    const databaseInsertResult = await db.insert(contactForm).values(submissionPayload).returning();
    const telegramMessageSent = await sendTelegramMessage(submissionPayload);

    if (Array.isArray(databaseInsertResult) && databaseInsertResult[0]?.id && telegramMessageSent) {
      return { submitted: true };
    }
    return { submitted: false };
  } catch (error) {
    console.error(error);
    return { submitted: false };
  }
}
