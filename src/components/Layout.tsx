import React, { FC } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { graphql, useStaticQuery } from 'gatsby';

interface Props {
	// title:string;
}
const activeClass = 'active';
const query = graphql`
	query PagesSlug {
		allDatoCmsPage {
			nodes {
				slug
				id
			}
		}
	}
`;
interface Data {
	allDatoCmsPage: {
		nodes: {
			slug: string;
			id: number;
		}[];
	};
}
const Layout: FC<Props> = ({ children }) => {
	const { nodes } = useStaticQuery<Data>(query).allDatoCmsPage;
	return (
		<>
			<header className="page-header">
				<nav className="page-nav">
					<ul>
						{nodes.map(({ slug }) => (
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

export default Layout;
