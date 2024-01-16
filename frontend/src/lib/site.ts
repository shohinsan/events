import { dev } from '$app/environment';
import { me } from '$source';

export const siteConfig = {
	name: 'Shohin Abdulkhamidov - Personal Portfolio Website',
	url: dev ? 'http://localhost:5173' : 'https://shohin.pages.dev',
	ogImage: me,
	description:
		'This is a personal website for Shohin Abdulkhamidov to showcase his projects, work experience and contact information.',
	links: {
		github: 'https://github.com/shohinsan',
		linkedin: 'https://www.linkedin.com/in/shohin-abdulkhamidov/',
		telegram: 'https://t.me/shohinsan',
		email: 'abd.shohin@gmail.com',
		instagram: 'https://www.instagram.com/shohin.abd/'
	},
	project: {
		meetminder: 'https://github.com/shohinsan/MeetMinder',
		rootsrise: 'https://github.com/shohinsan/RootsRise',
		ifarmo: 'https://github.com/shohinsan/iFarmo-Reimagined',
		mortesense: 'https://github.com/diego-ruben-cruz/MorteSense',
		starbucks: 'https://github.com/shohinsan/starbucks-enterprise-n-tier',
		bookup: 'https://github.com/shohinsan/sjsu_cs_151',
		scholarrabbit: 'https://github.com/shohinsan/sjsu_cmpe_131',
		twitter: 'https://github.com/shohinsan/Postwitter'
	},
	keywords: `portfolio, projects, personal, contact`
};

export type SiteConfig = typeof siteConfig;
