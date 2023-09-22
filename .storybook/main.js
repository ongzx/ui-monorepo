const custom = require('../webpack.config.js');

module.exports = {
  stories: [
    '../packages/**/*.stories.(ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-viewport'
  ],
  presets: ['@storybook/addon-docs/preset'],
  webpackFinal: (config) => {
    config.resolve.extensions.push('.ts', '.tsx');
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
    };
  },
};
