import { dev } from '$app/environment';
import { me } from '$source';

class Site {
	name: string;
	url: URL;
	ogImage: string;
	description: string;
	links: {
		github: URL;
		linkedin: URL;
		telegram: URL;
		email: string;
		instagram: URL;
	};
	projects: {
		meetminder: URL;
		rootsrise: URL;
		ifarmo: URL;
		mortesense: URL;
		starbucks: URL;
		bookup: URL;
		scholarrabbit: URL;
		twitter: URL;
	};
	keywords: string;

	constructor(
		name: string,
		url: URL,
		ogImage: string,
		description: string,
		links: {
			github: URL;
			linkedin: URL;
			telegram: URL;
			email: string;
			instagram: URL;
		},
		projects: {
			meetminder: URL;
			rootsrise: URL;
			ifarmo: URL;
			mortesense: URL;
			starbucks: URL;
			bookup: URL;
			scholarrabbit: URL;
			twitter: URL;
		},
		keywords: string
	) {
		this.name = name;
		this.url = url;
		this.ogImage = ogImage;
		this.description = description;
		this.links = links;
		this.projects = projects;
		this.keywords = keywords;
	}
}

const createSite = new Site(
	'Shohin Abdulkhamidov - Personal Portfolio Website',
	new URL(dev ? 'http://localhost:5173' : 'https://shohin.pages.dev'),
	me,
	'This is a personal website for Shohin Abdulkhamidov to showcase his projects, work experience, and contact information.',
	{
		github: new URL('https://github.com/yourgithub'),
		linkedin: new URL('https://www.linkedin.com/in/yourlinkedin'),
		telegram: new URL('https://t.me/yourtelegram'),
		email: 'you@example.com',
		instagram: new URL('https://www.instagram.com/yourinstagram')
	},
	{
		meetminder: new URL('https://github.com/shohinsan/MeetMinder'),
		rootsrise: new URL('https://github.com/shohinsan/RootsRise'),
		ifarmo: new URL('https://github.com/shohinsan/iFarmo-Reimagined'),
		mortesense: new URL('https://github.com/diego-ruben-cruz/MorteSense'),
		starbucks: new URL('https://github.com/shohinsan/starbucks-enterprise-n-tier'),
		bookup: new URL('https://github.com/shohinsan/sjsu_cs_151'),
		scholarrabbit: new URL('https://github.com/shohinsan/sjsu_cmpe_131'),
		twitter: new URL('https://github.com/shohinsan/Postwitter')
	},
	'web development, svelte, portfolio'
);

const site = {
	createSite
};

console.log();

export default site;
