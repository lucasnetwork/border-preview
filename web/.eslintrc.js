module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier', 'eslint-plugin-import-helpers'],
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/jsx-props-no-spreading': 'off',
		'react/react-in-jsx-scope': 'off',
		'import-helpers/order-imports': [
			'warn',
			{
				newlinesBetween: 'always',
				groups: ['module', ['parent', 'sibling', 'index']],
				alphabetize: { order: 'asc', ignoreCase: true },
			},
		],
	},
};
