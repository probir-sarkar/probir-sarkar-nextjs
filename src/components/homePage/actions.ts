"use server";
import { client } from "@/configs/directus";
import { createItem } from "@directus/sdk";

export const submitContactForm = async (data: any) => {
  try {
    const response = await client.request(createItem("contact_form", data));
    return response;
  } catch (e) {
    return false;
  }
};
