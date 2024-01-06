const env = {
  dbUrl: process.env.POSTGRES_URL || "",
  appwriteEndpoint: "https://cloud.appwrite.io/v1",
  appwriteProject: process.env.APPWRITE_PROJECT,
  appwriteApiKey: process.env.APPWRITE_API_KEY,
};

export default env;
