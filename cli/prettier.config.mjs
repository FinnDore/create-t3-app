import baseConfig from "../prettier.config.mjs";

/** @type {import('prettier').Config} */
const config = {
  ...baseConfig,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  tailwindConfig: "./template/extras/config/tailwind.config.ts",
  trailingComma: "es5",
  overrides: [
    {
      files: "template/**/*.cjs",
      options: {
        plugins: [],
      },
    },
  ],
};

export default config;
