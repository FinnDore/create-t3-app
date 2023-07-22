const baseConfig = require("../.prettierrc.cjs");

/** @type {import('prettier').Config} */
const config = {
  ...baseConfig,
  plugins: [ "prettier-plugin-tailwindcss"],
  tailwindConfig: "./template/extras/config/tailwind.config.ts",
  trailingComma: "es5",
};

export default config;
