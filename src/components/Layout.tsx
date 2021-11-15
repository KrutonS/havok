import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { graphql } from 'gatsby';
import { GC } from '../types';

interface Props {
	// title:string;
}
const activeClass = 'active';

const Layout: GC<Props, Data> = ({ children, data }) => {
	console.log(data);

	return (
		<>
			<header className="page-header">
				<nav className="page-nav">
					{JSON.stringify(data, null, 2)}
					<ul>
						{data?.allDatoCmsPage.nodes.map(({ slug }) => (
							<li>
								<AniLink cover activeClass={activeClass} to={`/${slug}`}>
									{slug}
								</AniLink>
							</li>
						))}
					</ul>
				</nav>
			</header>
			<main>{children}</main>
		</>
	);
};
interface Data {
	allDatoCmsPage: {
		nodes: {
			slug: string;
			id: number;
		}[];
	};
}
export const query = graphql`
	query PagesSlug {
		allDatoCmsPage {
			nodes {
				slug
				id
			}
		}
	}
`;

export default Layout;
