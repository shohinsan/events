import type { NavItem } from '$customTypes';
import { About, Projects, Contact, Calendar } from '$assets';

interface NavigationConfig {
	desktopNavigation: NavItem[];
	mobileNavigation: NavItem[];
}

const navConfig: NavigationConfig = {
	desktopNavigation: [
		{ name: 'About', href: '/' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Life', href: '/life' },
		{ name: 'Contact', href: '/contact' }
	],

	mobileNavigation: [
		{ name: 'About', href: '/', icon: About },
		{ name: 'Projects', href: '/projects', icon: Projects },
		{ name: 'Life', href: '/life', icon: Calendar },
		{ name: 'Contact', href: '/contact', icon: Contact }
	]
};

export default navConfig;
