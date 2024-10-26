export type FlagType = 'normal' | 'number' | 'substitute';

export type FlagSize = 'xs' | 'sm' | 'md' | 'lg';

export type CodeProps = {
	code: string;
	symbol?: string;
	ipa?: string;
	respell?: string;
	type?: FlagType;
	label?: string;
};
