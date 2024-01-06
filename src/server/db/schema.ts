import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const contactForm = pgTable("contact_form", {
  id: serial("id"),
  name: text("name"),
  email: text("email"),
  message: text("message"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});
