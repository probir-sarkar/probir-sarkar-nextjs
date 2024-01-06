import env from "@/configs/env";

import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: env.dbUrl,
  },
  verbose: true,
  strict: true,
});
