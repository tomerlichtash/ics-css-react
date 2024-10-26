import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Flag from '../src/components/Flag';
import { Codes } from '../src';

const meta = {
	title: 'Flag',
	component: Flag,
	tags: ['autodocs'],
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
	args: {
		value: 'alfa',
		type: 'normal',
		size: 'md',
	},
	render: function Render({ value, ...args }) {
		return (
			<Flag
				value={value}
				{...args}
			/>
		);
	},
};

export const Gallery: Story = {
	render: function Render({ ...args }) {
		return (
			<div
				style={{
					display: 'inline-flex',
					flexWrap: 'wrap',
					gap: '2em',
					fontFamily: 'Nunito Sans',
				}}
			>
				{Codes.map((c, idx) => {
					return (
						<div
							style={{
								display: 'inline-flex',
								flexDirection: 'column',
								alignItems: 'center',
								gap: '0.25em',
							}}
							key={idx}
						>
							<Flag
								value={c.code}
								key={idx}
								type={c.type}
								{...args}
							/>
							<span>{c.ipa}</span>
							<span>{c.respell}</span>
							<span style={{ fontWeight: 700 }}>{c.code}</span>
						</div>
					);
				})}
			</div>
		);
	},
};
