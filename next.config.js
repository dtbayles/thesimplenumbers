// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // trailingSlash: true,
  images: {
    unoptimized: true
  },
  // assetPrefix: './',
  env: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    SES_SENDER_EMAIL: process.env.SES_SENDER_EMAIL,
    SES_RECIPIENT_EMAIL: process.env.SES_RECIPIENT_EMAIL,
    AWS_REGION: process.env.AWS_REGION,
  }
}

module.exports = nextConfig
