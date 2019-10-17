module.exports = {
	parserOptions: {
		sourceType: 'module',
	},
	parser: 'babel-eslint',
	env: {
		node: true,
	},
	extends: [
		'eslint:recommended',
		'standard',
		'prettier',
		'prettier/standard',
		'plugin:prettier/recommended',
		'plugin:jest/recommended',
	],
	plugins: ['prettier', 'jest'],
	rules: {
		'promise/catch-or-return': 'error',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: false,
				tab: { SwitchCase: 1 },
			},
		],
	},
};
