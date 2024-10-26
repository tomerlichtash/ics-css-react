import type { Preview } from '@storybook/react';
import './style.css';

const preview: Preview = {
	decorators: [(Story) => Story()],
};

export default preview;
