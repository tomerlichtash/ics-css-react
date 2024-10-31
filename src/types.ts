export type FlagType = 'normal' | 'number' | 'substitute';

export type FlagSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type CodeProps = {
	code: string;
	symbol?: string;
	ipa?: string;
	respell?: string;
	type?: FlagType;
	label?: string;
};
