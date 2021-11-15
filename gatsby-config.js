require('dotenv').config();

module.exports = {
	siteMetadata: {
		title: 'Havok',
		// titleTemplate: '%s · Havok',
		url: 'https://www.havok.com', // No trailing slash allowed!
		// logo: '/snape.jpg', // Path to the image placed in the 'static' folder, in the project's root directory.
	},
	plugins: [
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-transition-link`,
		'gatsby-plugin-postcss',
		{
			resolve: 'gatsby-source-datocms',
			options: {
				apiToken: process.env.DATO_API_TOKEN,
				environment: process.env.DATO_ENVIRONMENT,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `GatsbyJS`,
				short_name: `GatsbyJS`,
				start_url: `/`,
				background_color: `#f7f0eb`,
				theme_color: `#a2466c`,
				display: `standalone`,
				icon: 'src/assets/images/logo.svg',
				cache_busting_mode: 'none',
				theme_color_in_head: false,
			},
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				precachePages: [
					/* TODO: fill in later*/
				],
				workboxConfig: {
					globPatterns: ['**/logo*'],
				},
			},
		},
		// {
		// 	resolve: '@danbruegge/gatsby-plugin-stylelint',
		// 	options: {
		// 		files: ['**/*.{css,sass,scss}'],
		// 	},
		// },
	],
};
