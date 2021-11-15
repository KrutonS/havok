type React = import('react');
declare module 'gatsby-plugin-transition-link/AniLink' {
	interface Props extends React.HTMLAttributes<HTMLElement> {
		cover?: boolean;
		fade?: boolean;
		morph?: boolean;
		paintDrip?: boolean;
		swipe?: boolean;

		to?: string;
		activeClass?: string;
	}
	const AniLink: React.FC<Props>;
	export default AniLink;
}

declare module 'react-helmet';
