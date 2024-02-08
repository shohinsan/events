import { site } from '$seeds';

class Project {
	name: string;
	description: string;
	tags: string[];
	href: string;
	host: string;
	state: string;
	category: string;

	constructor({
		name,
		description,
		tags,
		href,
		host,
		state,
		category
	}: {
		name: string;
		description: string;
		tags: string[];
		href: string;
		host: string;
		state: string;
		category: string;
	}) {
		this.name = name;
		this.description = description;
		this.tags = tags;
		this.href = href;
		this.host = host;
		this.state = state;
		this.category = category;
	}
}
const createProjects: Project[] = [
	new Project({
		name: 'MorteSense',
		description: 'DIY home security system that detects motion and sends alerts to your phone.',
		tags: ['reactjs', 'fastapi', 'postgresql', 'github actions', 'raspberry pi'],
		href: site.createSite.projects.mortesense.href,
		host: site.createSite.projects.mortesense.host,
		state: 'Completed',
		category: 'Web'
	}),
	new Project({
		name: 'Starbucks Enterprise',
		description: 'End-to-End Enterprise Software for ordering coffee',
		tags: ['gcp', 'gke', 'spring-boot', 'cloud sql', 'java', 'docker'],
		href: site.createSite.projects.starbucks.href,
		host: site.createSite.projects.mortesense.host,
		state: 'Completed',
		category: 'Web'
	}),
	new Project({
		name: 'MeetMinder',
		description: 'Calendar app that helps you schedule meetings with your friends',
		tags: ['typescript', 'sveltekit', 'postgresql', 'tailwindcss', 'golang'],
		href: site.createSite.projects.meetminder.href,
		host: site.createSite.projects.mortesense.host,
		state: 'In Progress',
		category: 'Web'
	}),
	new Project({
		name: 'RootsRise',
		description: 'A static web app of my family tree. Collecting data at the moment.',
		tags: ['sveltekit', 'css', 'typescript'],
		href: site.createSite.projects.rootsrise.href,
		host: site.createSite.projects.mortesense.host,
		state: 'In Progress',
		category: 'Web'
	}),
	new Project({
		name: 'iFarmo',
		description: 'A platform for farmers to sell their produce directly to consumers.',
		tags: ['sveltekit', 'scss', 'bun', 'hono', 'mysql'],
		href: site.createSite.projects.ifarmo.href,
		host: site.createSite.projects.mortesense.host,
		state: 'Completed',
		category: 'Web'
	}),
	new Project({
		name: 'BookUp',
		description: 'This is a description of the project that I worked on at SJSU',
		tags: ['typescript', 'react', 'nextjs', 'tailwindcss', 'vercel', 'github actions'],
		href: site.createSite.projects.bookup.href,
		host: 'github.com',
		state: 'Completed',
		category: 'Web'
	}),
	new Project({
		name: 'ScholarRabbit',
		description: 'Note-taking app for students',
		tags: ['flask', 'sqlite', 'bootstrap'],
		href: site.createSite.projects.scholarrabbit.href,
		host: site.createSite.projects.mortesense.host,
		state: 'Completed',
		category: 'Web'
	}),
	new Project({
		name: 'Postwitter',
		description: 'A platform for sharing your thoughts with the world',
		tags: ['swift', 'firebase', 'cocoapods', 'xcode'],
		href: site.createSite.projects.twitter.href,
		host: site.createSite.projects.mortesense.host,
		state: 'Completed',
		category: 'Mobile'
	})
];

export default createProjects;
