import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const user = pgTable("user", {
	id: serial("id").notNull(),
	name: text("name"),
	email: text("email"),
	password: text("password"),
	role: text("role"),
	createdAt: timestamp("created_at", { mode: 'string' }),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
});