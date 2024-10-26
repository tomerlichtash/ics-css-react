import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
	theme: create({
		base: 'light',

		brandTitle: 'ics-in-css-react',
		brandUrl: '#',
		brandTarget: '_self',
	}),
});
