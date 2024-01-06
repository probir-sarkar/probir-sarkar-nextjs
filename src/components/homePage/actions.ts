"use server";
import db from "@/server/db";
import { contactForm } from "@/server/db/schema";

export async function submitContactForm(state: any, formData: FormData) {
  try {
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    if (!name || !email || !message) return;
    const res = await db
      .insert(contactForm)
      .values({
        name,
        email,
        message,
      })
      .returning();
    if (Array.isArray(res) && res[0]?.id) return { submitted: true };
    return { submitted: false };
  } catch (e) {
    console.log(e);
    return { submitted: false };
  }
}
