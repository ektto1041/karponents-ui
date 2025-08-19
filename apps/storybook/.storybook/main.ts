import type { StorybookConfig } from "@storybook/react-vite";

import { dirname, join } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    "../../../packages/**/src/**/*.mdx",
    "../../../packages/**/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-vitest"),
  ],
  staticDirs: ["../../../packages/fonts/public"],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(baseConfig) {
    const { default: svgr } = await import("vite-plugin-svgr");

    baseConfig.plugins = [
      ...(baseConfig.plugins ?? []),
      svgr({
        svgrOptions: {
          exportType: "named",
          svgo: true,
          dimensions: false,
          titleProp: true,
          ref: true,
        },
        include: "**/*.svg",
      }),
    ];

    // Path aliases
    baseConfig.resolve = {
      ...baseConfig.resolve,
      alias: {
        ...baseConfig.resolve?.alias,
        "@assets": join(__dirname, "../../../packages/assets"),
        "@karpotic": join(__dirname, "../../../packages/karpotic"),
        "@fonts": join(__dirname, "../../../packages/fonts"),
      },
    };

    return baseConfig;
  },
};
export default config;
