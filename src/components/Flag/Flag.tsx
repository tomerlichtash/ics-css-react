import React from 'react';
import classNames from 'classnames';
import styles from './Flag.module.css';
import type { FlagSize, FlagType } from '../../types';

type FlagProps = {
	value: string;
	type?: FlagType;
	size?: FlagSize;
	className?: string;
	style?: Record<string, string>;
};

const flagType: Partial<Record<FlagType, string>> = {
	number: styles.polygon,
	substitute: styles.triangle,
};

function Flag({ value, type, size, className, ...rest }: FlagProps) {
	return (
		<span
			className={classNames(styles.root, className)}
			data-size={size}
			data-testid={value}
			{...rest}
		>
			<span
				className={classNames(
					styles.inner,
					styles[value.toLowerCase()],
					type ? flagType[type] : '',
				)}
			></span>
		</span>
	);
}

export default Flag;
