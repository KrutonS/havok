module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: 'module',
	},
	ignorePatterns: ['^.*', '^gatsby-*'],
	plugins: ['react', 'jsx-a11y'],
	rules: {
		'react/jsx-filename-extension': 0,
	},
};
