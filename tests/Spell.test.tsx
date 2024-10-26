import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Spell from '../src/components/Spell';

describe('Spell', () => {
	test('render', () => {
		render(<Spell>icsincss</Spell>);

		const india = screen.queryAllByTestId('india');
		expect(india).toHaveLength(2);

		const charlie = screen.queryAllByTestId('charlie');
		expect(charlie).toHaveLength(2);

		const sierra = screen.queryAllByTestId('sierra');
		expect(sierra).toHaveLength(3);
	});
});
