module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		// "plugin:@typescript-eslint/recommended",
		'prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	ignorePatterns: ['.*', 'gatsby-*', '*.css', 'commitlint.config.js'],
	plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
	rules: {
		'react/jsx-filename-extension': 0,
		'react/function-component-definition': 0,
		'react/prop-types': 0,
		'arrow-body-style': 0,
		'spaced-comment': [
			'warn',
			'always',
			{
				line: {
					markers: ['#region', '#endregion', 'region', 'endregion'],
				},
			},
		],
	},
};
