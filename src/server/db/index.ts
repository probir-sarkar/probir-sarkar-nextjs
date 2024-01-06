import env from "@/configs/env";
import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
neonConfig.fetchConnectionCache = true;
const sql = neon(env.dbUrl!);
const db = drizzle(sql);
export default db;
