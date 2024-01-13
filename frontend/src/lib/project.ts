import type { ProjectItem } from '$customTypes';
import me from '$source/me.png';
import { siteConfig } from '$lib/site';

interface ProjectsConfig {
	stack: ProjectItem[];
}

export const projectConfig: ProjectsConfig = {
	stack: [
		{
			name: 'MeetMinder',
			description: 'This is a description of the project that I worked on at MeetMinder',
			tags: ['typescript', 'react', 'nextjs', 'tailwindcss', 'vercel', 'github actions'],
			href: siteConfig.project.meetminder,
			host: 'github.com'
		},
		{
			name: 'RootsRise',
			description: 'This is a description of the project that I worked on at RootsRise',
			tags: ['typescript', 'react', 'nextjs', 'tailwindcss', 'vercel', 'github actions'],
			href: siteConfig.project.rootsrise,
			host: 'github.com'
		},
		{
			name: 'iFarmo',
			description: 'This is a description of the project that I worked on at iFarmo',
			tags: ['typescript', 'react', 'nextjs', 'tailwindcss', 'vercel', 'github actions'],
			href: siteConfig.project.ifarmo,
			host: 'github.com'
		},
		{
			name: 'MorteSense',
			description: 'This is a description of the project that I worked on at MorteSense',
			tags: ['typescript', 'react', 'nextjs', 'tailwindcss', 'vercel', 'github actions'],
			href: siteConfig.project.mortesense,
			host: 'github.com'
		},
		{
			name: 'Starbucks Enterprise',
			description: 'This is a description of the project that I worked on at Starbucks',
			tags: ['typescript', 'svelte', 'sapper', 'tailwindcss', 's3', 'cloudfront', 'github actions'],
			href: siteConfig.project.starbucks,
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
			description: 'This is a description of the project that I worked on at SJSU',
			tags: ['typescript', 'react', 'nextjs', 'tailwindcss', 'vercel', 'github actions'],
			href: siteConfig.project.scholarrabbit,
			host: 'github.com'
		},
		{
			name: 'Postwitter',
			description: 'This is a description of the project that I worked on at SJSU',
			tags: ['typescript', 'react', 'nextjs', 'tailwindcss', 'vercel', 'github actions'],
			href: siteConfig.project.twitter,
			host: 'github.com'
		},
	
	]
};
