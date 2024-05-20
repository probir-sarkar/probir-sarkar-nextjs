import { env } from "@/env";
import { createDirectus, rest, createItem, staticToken } from "@directus/sdk";

export const client = createDirectus(env.DIRECTUS_URL).with(staticToken(env.DIRECTUS_TOKEN)).with(rest());
