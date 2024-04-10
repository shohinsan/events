import type { ComponentType } from 'svelte';
import { About, Projects, Contact, Calendar, Article } from '$icons';

class Navigation {
	name: string;
	href: string;
	icon?: ComponentType | null;

	constructor(name: string, href: string, icon?: ComponentType | null) {
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

const createNavigation = [
	new Navigation('About', '/', About),
	new Navigation('Projects', '/projects', Projects),
	new Navigation('Life', '/life', Calendar),
	new Navigation('Articles', '/articles', Article),
	new Navigation('Contact', '/contact', Contact)
];

const navigations = {
	desktop: createNavigation.map(({ icon, ...$restProps }) => ({ ...$restProps, icon: undefined })),
	mobile: createNavigation
};

export default navigations;
