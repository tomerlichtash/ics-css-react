import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Flag from '../src/components/Flag';

describe('Flag', () => {
	test('render', () => {
		render(<Flag value="alfa" />);

		const flag = screen.queryAllByTestId('alfa');

		expect(flag).toHaveLength(1);
	});
});
