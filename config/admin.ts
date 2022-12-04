export default ({ env }) => ({
  auth: {
    secret: env("APP_ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("APP_API_TOKEN_SALT"),
  },
});
