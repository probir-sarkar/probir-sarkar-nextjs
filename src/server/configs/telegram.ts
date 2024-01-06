import env from "@/configs/env";

export async function telegramMessageSender(message: String) {
  try {
    const url = `${env.telegramUrl}/sendMessage`;
    const data = {
      chat_id: env.telegramChatId,
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
    console.error(e);
    return false;
  }
}
