<script>
	import { project } from '$seeds';
	import { Link } from '$icons';
</script>

<svelte:head>
	<title>Projects - Check out my work experience</title>
	<meta name="twitter:title" content="Project experiences" />
	<meta name="twitter:description" content="Dare you check out my projects" />
	<meta name="Description" content="Dare you check out my projects" />
</svelte:head>

<div class="my-16 sm:mt-32 sm:mb-52">
	<div
		class="grid grid-cols-1 gap-y-16 lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-y-12 lg:max-w-[700px]"
	>
		<div class="lg:order-first lg:row-span-2">
			<h2 class="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
				Things I’ve made trying to put my dent in the universe.
			</h2>

			<p class="mt-6 text-base text-zinc-400">
				I’ve worked on tons of little projects over the years but these are the ones that I’m most
				proud of. Many of them are open-source, so if you see something that piques your interest,
				check out the code and contribute if you have ideas for how it can be improved.
			</p>
		</div>
	</div>

	<div
		class="
    grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
	>
		{#each project as { name, description, href, tags, host, state }}
			<ul class="group hover:bg-zinc-800 rounded-xl px-5 py-5 mt-10 shadow-xl">
				<a {href} class="group">
					<!-- <div
						class="relative flex h-12 w-12 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0"
					>
						<img src={icon} alt="Shohin's Pictures" class="h-8 w-8 rounded" />
					</div> -->

					<h1 class="mt-5 text-zinc-100">
						{name}
					</h1>

					<h2 class="text-sm mt-5 text-zinc-500">
						{description}
					</h2>

					<li class="text-zinc-300 mt-5">
						{#if tags}
							<div class="flex flex-wrap">
								{#each tags as tag}
									<span
										class="mr-2 mb-2 bg-zinc-600 rounded-md text-sm px-1 py-1 whitespace-nowrap overflow-ellipsis"
										>{`# ${tag}`}</span
									>
								{/each}
							</div>
						{/if}
					</li>

					<div
						class="flex justify-between items-end flex items-center mt-5 text-zinc-200 transition-colors group-hover:text-teal-400"
					>
						<div class="flex items-center">
							<Link />
							<span class="ml-2">{host}</span>
						</div>
						<div>
							<span
								class={state === 'In Progress'
									? 'group-hover:text-yellow-400'
									: state === 'Completed'
										? 'group-hover:text-green-400'
										: ''}>{state}</span
							>
						</div>
					</div>
				</a>
			</ul>
		{/each}
	</div>
</div>
