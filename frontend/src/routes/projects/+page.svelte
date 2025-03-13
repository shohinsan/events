<script lang="ts">
	let project = $state([
		{
			name: 'MorteSense',
			description: 'DIY home security system that detects motion and sends alerts to your phone.',
			tags: ['reactjs', 'fastapi', 'postgresql', 'github actions', 'raspberry pi'],
			href: 'https://github.com/MorteSense',
			host: 'github.com',
			state: 'Completed',
			category: 'Web'
		},
		{
			name: 'Starbucks Enterprise',
			description: 'End-to-End Enterprise Software for ordering coffee',
			tags: ['gcp', 'gke', 'spring-boot', 'cloud sql', 'java', 'docker'],
			href: 'https://github.com/shohinsan/starbucks-enterprise-n-tier',
			host: 'github.com',
			state: 'Completed',
			category: 'Web'
		},
		{
			name: 'RootsRise',
			description: 'A static web app of my family tree. Collecting data at the moment.',
			tags: ['sveltekit', 'css', 'typescript'],
			href: 'https://abdulkhamidov.pages.dev',
			host: 'cloudflare.com',
			state: 'In Progress',
			category: 'Web'
		},
		{
			name: 'FlexRent',
			description: 'A platform for renting a house',
			tags: ['figma', 'design'],
			href: 'https://www.figma.com/design/c6BSK1vEwPgJe8XVvR69z5/Flexrent?node-id=17-74063&t=fhZPAyUeFdrSb8gR-1https://www.figma.com/design/c6BSK1vEwPgJe8XVvR69z5/Flexrent?node-id=17-74063&t=fhZPAyUeFdrSb8gR-1',
			host: 'figma.com',
			state: 'Completed',
			category: 'Figma'
		}
	]);

	let active = $state('All');

	let categories = ['All', ...new Set(project.map((p) => p.category))];

	const handleTabClick = (value: string) => {
		active = value;
	};

	let categorized = $derived(project.filter((p) => p.category === active || active === 'All'));
</script>

<svelte:head>
	<title>Projects - Check out my work experience</title>
	<meta name="twitter:title" content="Project experiences" />
	<meta name="twitter:description" content="Dare you check out my projects" />
	<meta name="Description" content="Dare you check out my projects" />
</svelte:head>

<div class="my-16 sm:mt-32 sm:mb-52">
	{@render header()}
	<div class="mt-16">
		<ul class="flex justify-center space-x-6">
			{#each categories as category}
				{@render tabs(category)}
			{/each}
		</ul>
		<div class="mt-16">
			{#each categorized as project}
				{@render projects(project)}
			{/each}
		</div>
	</div>
</div>

<!-- Snippets -->

{#snippet header()}
	<div
		class="grid grid-cols-1 gap-y-16 lg:max-w-[700px] lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-y-12"
	>
		<div class="lg:order-first lg:row-span-2">
			<h2 class="text-4xl font-bold tracking-tight text-zinc-100">
				Things I've made trying to put my dent in the universe.
			</h2>
			<p class="mt-6 text-base text-zinc-400">
				I've worked on tons of little projects over the years but these are the ones that I'm most
				proud of. Many of them are open-source, so if you see something that piques your interest,
				check out the code and contribute if you have ideas for how it can be improved.
			</p>
		</div>
	</div>
{/snippet}

{#snippet tabs(category: string)}
	<button
		type="button"
		class="cursor-pointer"
		class:font-bold={category === active}
		onclick={() => handleTabClick(category)}
	>
		{category}
	</button>
{/snippet}

{#snippet projects(project: {
	name: string;
	description: string;
	tags: string[];
	href: string;
	host: string;
	state: string;
	category: string;
})}
	<div class="mt-16">
		<div class="flex items-center justify-between">
			<div>
				<h3 class="text-2xl font-bold text-zinc-100">{project.name}</h3>
				<p class="mt-2 text-base text-zinc-400">{project.description}</p>
			</div>
			<a
				href={project.href}
				target="_blank"
				rel="noopener noreferrer"
				class="text-base text-zinc-400"
			>
				{project.host}
			</a>
		</div>
		<div class="mt-2 flex items-center">
			<p class="text-base text-zinc-400">{project.state}</p>
			<p class="ml-4 text-base text-zinc-400">{project.tags.join(', ')}</p>
		</div>
	</div>
{/snippet}
