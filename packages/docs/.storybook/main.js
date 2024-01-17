import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/pages/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    "@storybook/addon-styling"
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
