import type { ProjectItem } from '$customTypes';
import { siteConfig } from '$lib/site';

interface ProjectsConfig {
	stack: ProjectItem[];
}

const projectConfig: ProjectsConfig = {
	stack: [
		{
			name: 'MorteSense',
			description: 'DIY home security system that detects motion and sends alerts to your phone.',
			tags: ['reactjs', 'fastapi', 'postgresql', 'github actions', 'raspberry pi'],
			href: siteConfig.project.mortesense,
			host: 'github.com'
		},
		{
			name: 'Starbucks Enterprise',
			description: 'End-to-End Enterprise Software for ordering coffee',
			tags: ['gcp', 'gke', 'spring-boot', 'cloud sql', 'java', 'docker'],
			href: siteConfig.project.starbucks,
			host: 'github.com'
		},
		{
			name: 'MeetMinder',
			description: 'In-progress: Calendar app that helps you schedule meetings with your friends',
			tags: ['typescript', 'sveltekit', 'postgresql', 'tailwindcss', 'golang'],
			href: siteConfig.project.meetminder,
			host: 'github.com'
		},
		{
			name: 'RootsRise',
			description: 'In-progress: a static web app of my family tree. Collecting data at the moment.',
			tags: ['sveltekit', 'css', 'typescript'],
			href: siteConfig.project.rootsrise,
			host: 'github.com'
		},
		{
			name: 'iFarmo',
			description: 'A platform for farmers to sell their produce directly to consumers.',
			tags: ['sveltekit', 'scss', 'bun', 'hono', 'mysql'],
			href: siteConfig.project.ifarmo,
			host: 'github.com'
		},
		{
			name: 'BookUp',
			description: 'This is a description of the project that I worked on at SJSU',
			tags: ['typescript', 'react', 'nextjs', 'tailwindcss', 'vercel', 'github actions'],
			href: siteConfig.project.bookup,
			host: 'github.com'
		},
		{
			name: 'ScholarRabbit',
			description: 'Note taking app for students',
			tags: ['flask', 'sqlite', 'bootstrap'],
			href: siteConfig.project.scholarrabbit,
			host: 'github.com'
		},
		{
			name: 'Postwitter',
			description: 'A platform for sharing your thoughts with the world',
			tags: ['swift', 'firebase', 'cocoapods', 'xcode'],
			href: siteConfig.project.twitter,
			host: 'github.com'
		},
	
	]
};

export default projectConfig;