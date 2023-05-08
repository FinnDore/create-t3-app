
const baseConfig = require("../.prettierrc.cjs");

/** @type {import('prettier').Config} */
const config = {
  ...baseConfig,
  plugins: [...baseConfig.plugins, require.resolve("prettier-plugin-tailwindcss")],
  tailwindConfig: "./template/extras/config/tailwind.config.ts",
};

module.exports = config;
