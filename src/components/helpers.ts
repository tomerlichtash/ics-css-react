import { Codes } from '../data/codes';

const getLetters = (text: string) =>
	text
		.split('')
		.filter((s) => s.trim())
		.map((c) => c.toLowerCase());

export const getMetaByCode = (code: string) => {
	return Codes.find((c) => c.code?.toLowerCase() === code);
};

export const getMetaBySymbol = (symbol: string) => {
	return Codes.find((c) => c.symbol?.toLowerCase() === symbol);
};

export const getFlagByKeyword = (keyword: string) =>
	getLetters(keyword)
		.map((letter) => {
			const meta = getMetaBySymbol(letter);
			return meta?.code ? `[[${meta?.code.toLowerCase()}]]` : letter;
		})
		.join(' ');
