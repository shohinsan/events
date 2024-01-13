import type { LinkItem } from '$customTypes';
import GitHub from '$assets/GitHub.svelte';
import LinkedIn from '$assets/LinkedIn.svelte';
import Telegram from '$assets/Telegram.svelte';
import Email from '$assets/Email.svelte';
import Instagram from '$assets/Instagram.svelte';
import { siteConfig } from '$lib/site';

interface LinksConfig {
	professionalLinks: LinkItem[];
	personalLinks: LinkItem[];
}

export const linkConfig: LinksConfig = {
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
