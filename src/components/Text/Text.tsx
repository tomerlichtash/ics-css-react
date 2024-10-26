import React, { useCallback } from 'react';
import classNames from 'classnames';
import styles from './Text.module.css';
import Flag from '../Flag/Flag';
import { FlagSize } from '../../types';
import { getMetaByCode } from '../helpers';

type TextProps = {
	children: string;
	noCaption?: boolean;
	size?: FlagSize;
	className?: string;
};

function Text({ children, noCaption, className, ...rest }: TextProps) {
	// Split by double square brackets
	const split = children.split(/(\[\[.*?\]\])/g).filter(Boolean);

	const renderFlag = useCallback(
		(text: string, idx: number) => {
			// Strip the double square brackets
			const code = text.replace(/\[\[|\]\]/g, '');

			const meta = getMetaByCode(code);

			if (!meta) {
				return code;
			}

			return (
				<span
					className={classNames(styles.flag, className)}
					title={meta?.label || meta.code}
					key={`text-${idx}`}
				>
					{!noCaption && <span className={styles.hint}>{meta?.symbol}</span>}
					<Flag
						value={code}
						type={meta?.type}
						{...rest}
					/>
				</span>
			);
		},
		[children, noCaption, rest],
	);

	return (
		<p className={classNames(styles.root, className)}>
			{split.map((text, idx) => {
				if (text.indexOf('[[') === 0) {
					return renderFlag(text, idx);
				} else {
					return text;
				}
			})}
		</p>
	);
}

export default Text;
