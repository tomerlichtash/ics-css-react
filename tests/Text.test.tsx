import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from '../src/components/Text';

describe('Text', () => {
	test('render', () => {
		render(<Text>some [[charlie]] text</Text>);

		const flag = screen.queryAllByTestId('charlie');
		expect(flag).toHaveLength(1);

		// const text1 = screen.queryByText('some');
		// const text2 = screen.queryByText('text');
		// expect(text1).toBeInTheDocument();
		// expect(text2).toBeInTheDocument();
	});
});
