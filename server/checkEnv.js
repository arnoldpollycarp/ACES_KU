async function checkEnv() {
  const requiredEnvVars = ["MONGO_URL", "JWT_SECRET", "APP_PORT", "NODE_ENV"];
  const missingEnvVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );
  if (missingEnvVars.length) {
    throw new Error(
      `Missing environment variables: ${missingEnvVars.join(
        ", "
      )} in your .env file, on your server directory`
    );
  }
}

module.exports = { checkEnv };
