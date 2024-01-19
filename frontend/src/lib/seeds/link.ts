import { GitHub, LinkedIn, Telegram, Email, Instagram, Steam} from '$icons';
import type { ComponentType } from 'svelte';
import { site } from '$seeds';

class Link {
	name: string;
	href: string;
	icon: ComponentType | null;

	constructor(name: string, href: string, icon: ComponentType | null) {
		this.name = name;
		this.href = href;
		this.icon = icon;
	}

	getName(): string {
		return this.name;
	}

	getHref(): string {
		return this.href;
	}

	getIcon(): ComponentType | null | undefined {
		return this.icon;
	}
}

const links1: Link[] = [
	new Link('Github', site.createSite.links.github.href, GitHub),
	new Link('LinkedIn', site.createSite.links.linkedin.href, LinkedIn)
];

const links2: Link[] = [
	new Link('Telegram', site.createSite.links.telegram.href, Telegram),
	new Link('Instagram', site.createSite.links.instagram.href, Instagram),
	new Link('Steam', site.createSite.links.steam.href, Steam),
];

const link = {
	professional: links1,
	personal: links2
};

export default link;
