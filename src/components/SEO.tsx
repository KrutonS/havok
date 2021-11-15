// import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { GC } from '../types';

interface Props {}
interface Data {
	_site: {
		globalSEO: {
			fallbackSEO: {
				title: string;
				image: {
					url: string;
				};
			};
		};
	};
}
const SEO: GC<Props, Data> = () => {
	// const {} = data._site.globalSEO;
	return (
		<Helmet>
			<meta charSet="UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>{}</title>
		</Helmet>
	);
};

// export const query = graphql`
// 	query GlobalSEO {
// 		_site {
// 			globalSeo {
// 				fallbackSeo {
// 					title
// 					image {
// 						url
// 					}
// 					description
// 				}
// 				siteName
// 				facebookPageUrl
// 			}
// 		}
// 	}
// `;

export default SEO;
