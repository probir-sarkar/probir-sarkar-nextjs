const env = {
  dbUrl: process.env.POSTGRES_URL || "",
  appwriteEndpoint: "https://cloud.appwrite.io/v1",
  appwriteProject: process.env.APPWRITE_PROJECT,
  appwriteApiKey: process.env.APPWRITE_API_KEY,
  telegramUrl: "https://api.telegram.org/bot" + process.env.TELEGRAM_BOT_TOKEN,
  telegramChatId: process.env.TELEGRAM_CHAT_ID,
  brevoApiKey: process.env.BREVO_API_KEY || "",
};

export default env;
