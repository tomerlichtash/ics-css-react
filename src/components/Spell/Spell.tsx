import React from 'react';
import Text from '../Text/Text';
import type { FlagSize } from '../../types';
import { getFlagByKeyword, getFlagByKey } from '../helpers';

type SpellProps = {
	children: string;
	noCaption?: boolean;
	size?: FlagSize;
	className?: string;
};

function Spell({ children, noCaption, size = 'sm', ...rest }: SpellProps) {
	return (
		<Text
			size={size}
			noCaption={noCaption}
			{...rest}
		>
			{getFlagByKeyword(children)}
		</Text>
	);
}
export default Spell;
