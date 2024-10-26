import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Text from '../src/components/Text';

const meta = {
	title: 'Text',
	component: Text,
	tags: ['autodocs'],
	args: {
		children: 'Text with embedded flags, e.g.: [[alfa]] or [[papa]]',
		size: 'md',
		noCaption: false,
	},
	argTypes: {
		size: {
			options: ['xs', 'sm', 'md', 'lg'],
			control: 'select',
		},
		noCaption: {
			control: 'boolean',
		},
	},
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function Render({ children, ...args }) {
		return <Text {...args}>{children}</Text>;
	},
};
