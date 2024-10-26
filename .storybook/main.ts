import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
	stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-webpack5-compiler-babel',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	staticDirs: ['../public'],
	previewHead: (head) => `
    ${head}
  `,
};
export default config;
