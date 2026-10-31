import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  webpack(config) {
    for (const rule of config.module.rules) {
      for (const cssRule of rule.oneOf ?? []) {
        if (cssRule.test?.toString() !== "/(?<!\\.module)\\.css$/") continue;

        cssRule.use.push({
          loader: require.resolve("@tailwindcss/turbopack"),
          options: { base: process.cwd() },
        });
      }
    }

    return config;
  },
};

export default nextConfig;
