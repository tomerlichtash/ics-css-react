import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Spell from '../src/components/Spell';

const meta = {
	title: 'Spell',
	component: Spell,
	tags: ['autodocs'],
	args: {
		children: 'ics in css',
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
} satisfies Meta<typeof Spell>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function Render({ children, ...args }) {
		return <Spell {...args}>{children}</Spell>;
	},
};
