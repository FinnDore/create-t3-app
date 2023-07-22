import baseConfig from "../prettier.config.mjs";

/** @type {import('prettier').Config} */
const config = {
  ...baseConfig,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss", // MUST come last
  ],
  pluginSearchDirs: false,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  astroAllowShorthand: false,
  tailwindConfig: "./tailwind.config.ts",
};

module.exports = config;
