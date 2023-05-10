import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  stories: [
  // "../src/**/*.mdx",
  "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "storybook-addon-react-router-v6"],
  core: {},
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  async viteFinal(config, options) {
    // Add your configuration here
    return config;
  }
};
export default config;