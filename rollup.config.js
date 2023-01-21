import del from 'rollup-plugin-delete';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
const bundleSize = require('rollup-plugin-bundle-size');

export default [
	{
		input: './index.ts',
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'esm' }
		],
		plugins: [typescript(), del({ targets: ['dist/*'] }), bundleSize()],
		external: Object.keys(pkg.peerDependencies || {})
	}
];
