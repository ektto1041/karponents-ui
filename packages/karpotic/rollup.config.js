// packages/button/rollup.config.js
const path = require("path");
const baseConfig = require("../../rollup.config.base");

module.exports = {
  ...baseConfig,
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
  ],
};
