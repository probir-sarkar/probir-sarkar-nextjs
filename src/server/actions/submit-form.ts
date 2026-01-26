"use server";

import axios from "axios";
import { ContactFields } from "@/components/contact-form";

async function verifyTurnstileToken(token: string): Promise<boolean> {
  try {
    const response = await axios.post(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
      }
    );
    return response.data.success === true;
  } catch (error) {
    console.error("Turnstile verification failed:", error);
    return false;
  }
}

export async function telegramMessageSender(message: string) {
  try {
    await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_URL}/sendMessage`,
      {
        chat_id: process.env.TELEGREM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }
    );
    return true;
  } catch (e) {
    return false;
  }
}

export async function sendTelegramMessage({
  name,
  email,
  message,
  turnstileToken,
}: ContactFields) {
  // Verify Turnstile token first
  const isValid = await verifyTurnstileToken(turnstileToken);
  if (!isValid) {
    throw new Error("Invalid CAPTCHA verification");
  }

  const formattedMessage = `
    📬 <b>New Contact Form Submission</b>\n
    <b>🤖 Name:</b> ${name}\n
    <b>📧 Email:</b> ${email}\n
    <b>🗨️ Message:</b> ${message}\n
  `;
  return await telegramMessageSender(formattedMessage);
}
