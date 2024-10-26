import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Flag from '../src/components/Flag';
import { Codes } from '../src';

const meta = {
	title: 'Flag',
	component: Flag,
	tags: ['autodocs'],
	args: {
		value: 'charlie',
		type: 'normal',
		size: 'md',
	},
	argTypes: {
		value: {
			options: Codes.map((c) => c.code?.toLowerCase()),
			control: 'select',
		},
		size: {
			options: ['xs', 'sm', 'md', 'lg'],
			control: 'select',
		},
		type: {
			options: ['normal', 'number', 'substitute'],
			control: 'select',
		},
	},
} satisfies Meta<typeof Flag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function Render({ value, ...args }) {
		return (
			<Flag
				value={value}
				{...args}
			/>
		);
	},
};

export const All: Story = {
	render: function Render({ value, ...args }) {
		return Codes.map((c, idx) => {
			return (
				<Flag
					value={c.code}
					key={idx}
					type={c.type}
					style={{ margin: '0 1em 1em' }}
				/>
			);
		});
	},
};
