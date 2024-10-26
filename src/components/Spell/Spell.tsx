import React from 'react';
import Text from '../Text/Text';
import type { FlagSize } from '../../types';
import { getFlagByKeyword } from '../helpers';

type SpellProps = {
	children: string;
	noCaption?: boolean;
	size?: FlagSize;
	className?: string;
};

function Spell({ children, ...rest }: SpellProps) {
	return <Text {...rest}>{getFlagByKeyword(children)}</Text>;
}
export default Spell;
