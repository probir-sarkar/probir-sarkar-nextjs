import { env } from "@/env";
import { createDirectus, rest, createItem, staticToken, graphql } from "@directus/sdk";

export const client = createDirectus(env.DIRECTUS_URL).with(staticToken(env.DIRECTUS_TOKEN)).with(rest());

export const directus = createDirectus(env.DIRECTUS_URL).with(staticToken(env.DIRECTUS_TOKEN)).with(graphql());
