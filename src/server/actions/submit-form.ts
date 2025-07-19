"use server";

import { ContactFields } from "@/components/contact-form";

export async function telegramMessageSender(message: string) {
  try {
    const url = `https://api.telegram.org/bot${process.env.TELEGRAM_URL}/sendMessage`;
    const data = {
      chat_id: process.env.TELEGREM_CHAT_ID,
      text: message,
      parse_mode: "HTML",
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const res = await fetch(url, options);
    const jsonResponse = await res.json();
    return jsonResponse;
  } catch (e) {
    return false;
  }
}

export async function sendTelegramMessage({
  name,
  email,
  message,
}: ContactFields) {
  const formattedMessage = `
    📬 <b>New Contact Form Submission</b>\n
    <b>🤖 Name:</b> ${name}\n
    <b>📧 Email:</b> ${email}\n
    <b>🗨️ Message:</b> ${message}\n
  `;
  return await telegramMessageSender(formattedMessage);
}
