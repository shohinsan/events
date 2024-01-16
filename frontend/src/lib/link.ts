import type { LinkItem } from '$customTypes';
import { GitHub, LinkedIn, Telegram, Email, Instagram } from '$assets';

import { siteConfig } from '$lib/site';

interface LinksConfig {
	professionalLinks: LinkItem[];
	personalLinks: LinkItem[];
}

const linkConfig: LinksConfig = {
	professionalLinks: [
		{ name: 'Github', href: siteConfig.links.github, icon: GitHub },
		{ name: 'LinkedIn', href: siteConfig.links.linkedin, icon: LinkedIn }
	],

	personalLinks: [
		{ name: 'Telegram', href: siteConfig.links.telegram, icon: Telegram },
		{ name: 'Email', href: siteConfig.links.email, icon: Email },
		{ name: 'Instagram', href: siteConfig.links.instagram, icon: Instagram }
	]
};

export default linkConfig;
