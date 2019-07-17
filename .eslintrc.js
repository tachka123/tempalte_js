/* eslint-disable filenames/match-regex */

const languageSettings = [
	{
		extensions: [ '.js' ],
		language: 'javascript',
	},
	{
		extensions: [ '.ts' ],
		language: 'typescript',
	},
];

/** @type {string[]} */
const allExtensions = [];
for (const describe of languageSettings) {
	const { extensions } = describe;
	allExtensions.concat(extensions);
}

module.exports = {
	// eslint-disable-next-line unicorn/prevent-abbreviations
	env: {
		node: true,
	},
	extends: [ 'canonical', 'prettier' ],
	plugins: [ 'jsdoc', 'prettier' ],
	root: true,
	rules: {
		'array-bracket-spacing': [
			'error',
			'always',
			{
				arraysInArrays: false,
				objectsInArrays: false,
				singleValue: true,
			},
		],
		'babel/object-curly-spacing': 'off',
		'callback-return': 'off',
		'comma-dangle': [ 'error', 'always-multiline' ],
		'eol-last': [ 'error', 'always' ],
		'fp/no-class': 'off',
		'fp/no-this': 'off',
		'func-style': [ 'error', 'declaration' ],
		'import/no-commonjs': 'off',
		'import/unambiguous': 'off',
		indent: [ 'error', 'tab', { SwitchCase: 1 }],
		'no-console': 'off',
		'no-debugger': 'off',
		'no-process-env': 'off',
		'no-tabs': 'off',
		'object-curly-spacing': [
			'error',
			'always',
			{
				arraysInObjects: true,
				objectsInObjects: true,
			},
		],
		quotes: [
			'error',
			'single',
			{
				allowTemplateLiterals: true,
				avoidEscape: true,
			},
		],
		'require-jsdoc': [
			'error',
			{
				require: {
					ArrowFunctionExpression: false,
					ClassDeclaration: true,
					FunctionDeclaration: true,
					FunctionExpression: false,
					MethodDefinition: true,
				},
			},
		],
		semi: [ 'error', 'always' ],
		'space-before-function-paren': [ 'error', 'never' ],
		'unicorn/prevent-abbreviations': [
			'error',
			{
				extendDefaultWhitelist: true,
				whitelist: {
					getInitialProps: true,
				},
			},
		],
	},
	settings: {
		'import/extensions': allExtensions,
		'import/resolver': {
			node: {
				// paths: [ './src' ],
				extensions: allExtensions,
			},
			webpack: {
				config: 'webpack.config.js',
			},
		},
	},
};
