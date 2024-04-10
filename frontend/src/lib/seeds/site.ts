import { dev } from '$app/environment';

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
		steam: URL;
		x: URL;
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
	privacy: {
		effectiveDate: string;
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
			steam: URL;
			x: URL;
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
		privacy: {
			effectiveDate: string;
		},
		keywords: string
	) {
		this.name = name;
		this.url = url;
		this.ogImage = ogImage;
		this.description = description;
		this.links = links;
		this.projects = projects;
		this.privacy = privacy;
		this.keywords = keywords;
	}
}

const createSite = new Site(
	'Shohin Abdulkhamidov - Personal Portfolio Website',
	new URL(dev ? 'http://localhost:5173' : 'https://shohin.pages.dev'),
	'https://shohin.pages.dev/portrait.png',
	'This is a personal website for Shohin Abdulkhamidov to showcase his projects, work experience, and contact information.',
	{
		github: new URL('https://github.com/shohinsan'),
		linkedin: new URL('https://www.linkedin.com/in/shohin-abdulkhamidov'),
		telegram: new URL('https://t.me/shohinsan'),
		email: 'abd.shohin@gmail.com',
		instagram: new URL('https://www.instagram.com/shohin.abd'),
		steam: new URL('https://steamcommunity.com/id/shohinsan'),
		x: new URL('https://twitter.com/ShohinAbd')
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
	{
		effectiveDate: 'January 1, 2023'
	},
	'web development, svelte, portfolio'
);

const site = {
	createSite
};

export default site;
