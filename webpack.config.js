/* eslint-disable filenames/match-regex */
/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable filenames/match-exported */

const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = (env, argv) => {
	const moduleRules =
	[
		{
			test: /\.tsx?$/,
			use: 'ts-loader',
		},
	];

	const externals = [];

	if (argv.mode !== 'production') {
		moduleRules[0].exclude = /node_modules/;
		externals.push(nodeExternals());
	}

	return {
		context: path.resolve(__dirname, './src'),
		devtool: 'source-map',
		entry: './main.js',
		externals,
		module: {
			rules: moduleRules,
		},
		node: {
			__dirname: false,
			__filename: false,
		},
		output: {
			devtoolModuleFilenameTemplate: '[absolute-resource-path]',
			filename: '[name].js',
			path: path.resolve(__dirname, 'dist'),
			publicPath: '/',
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
			extensions: [ '.js' ],
		},
		target: 'node',
	};
};
