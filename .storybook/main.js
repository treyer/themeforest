const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, "../src/components"),
      layouts: path.resolve(__dirname, "../src/layouts"),
      styles: path.resolve(__dirname, "../src/styles"),
      context: path.resolve(__dirname, "../src/context"),
      types: path.resolve(__dirname, "../src/types"),
      pages: path.resolve(__dirname, "../src/pages"),
      constants: path.resolve(__dirname, "../src/constants"),
    };
    return config;
  },
};
