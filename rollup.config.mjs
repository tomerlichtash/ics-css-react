import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';

import pkg from './package.json' assert { type: 'json' };

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: pkg.module,
				format: 'esm',
				sourcemap: true,
			},
			{
				file: 'dist/bundle.min.js',
				format: 'iife',
				name: 'MLComponents',
				globals: {
					react: 'React', // Externalized global name for React
					'react-dom': 'ReactDOM', // Externalized global name for ReactDOM
					'react/jsx-runtime': 'jsxRuntime', // Externalized global name for jsxRuntime
				},
				plugins: [terser()],
			},
		],
		external: ['react', 'react-dom', 'react/jsx-runtime'],
		plugins: [
			peerDepsExternal(), // exclude peer dependencies
			resolve({
				// Exclude tests and stories directories from resolution
				exclude: ['**/tests/**', '**/stories/**'],
			}),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.json',
				exclude: ['**/tests/**', '**/stories/**'], // Exclude tests and stories directories
			}),
			postcss(),
			terser(),
			replace({
				'use client': '', // Remove the "use client" directive
				preventAssignment: true,
			}),
		],
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: [/\.(css)$/], // Exclude style files from .d.ts bundle
	},
];
