import crypto from "crypto";

export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("AWS_ACCESS_KEY_ID"),
        secretAccessKey: env("AWS_ACCESS_SECRET"),
        region: env("AWS_REGION"),
        params: {
          Bucket: env("AWS_BUCKET"),
        },
        sizeLimit: 5 * 1024 * 1024,
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "users-permissions": {
    config: {
      jwtSecret:
        env("APP_JWT_SECRET") || crypto.randomBytes(16).toString("base64"),
      jwt: {
        expiresIn: "1d",
      },
    },
  },
  seo: {
    enabled: true,
  },
  ckeditor: true,
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  "import-export-entries": {
    enabled: true,
  },
});
