import type { NavItem } from '$customTypes';
import About from '$assets/About.svelte';
import Projects from '$assets/Projects.svelte';
import Contact from '$assets/Contact.svelte';

interface NavigationConfig {
	desktopNavigation: NavItem[];
	mobileNavigation: NavItem[];
}

export const navConfig: NavigationConfig = {
	desktopNavigation: [
		{ name: 'About', href: '/' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Contact', href: '/contact' }
	],

	mobileNavigation: [
		{ name: 'About', href: '/', icon: About },
		{ name: 'Projects', href: '/projects', icon: Projects },
		{ name: 'Contact', href: '/contact', icon: Contact }
	],

};
