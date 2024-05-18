<script lang="ts">
	import { cn } from '@/shared/lib/utils'
	import * as Tabs from '@/shared/ui/tabs'
	import { Badge } from '@/shared/ui/badge'
	import { Link } from '@/shared/icons'
	import { projects } from '@/entities'

	let activeTab: string = 'All'
	let categorized: any[] = projects

	const handleTabClick = (value: string) => {
		activeTab = value
		categorized =
			value === 'All' ? projects : projects.filter((proj) => proj.category === value)
	}

	const categories = ['All', ...new Set(projects.map((proj) => proj.category))]
</script>

<svelte:head>
	<title>Projects - Check out my work experience</title>
	<meta name="twitter:title" content="Project experiences" />
	<meta name="twitter:description" content="Dare you check out my projects" />
	<meta name="Description" content="Dare you check out my projects" />
</svelte:head>

<div class={cn('my-16 sm:mb-52 sm:mt-32')}>
	<div
		class="grid grid-cols-1 gap-y-16 lg:max-w-[700px] lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-y-12"
	>
		<div class="lg:order-first lg:row-span-2">
			<h2 class="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
				Things I’ve made trying to put my dent in the universe.
			</h2>

			<p class="mt-6 text-base text-zinc-400">
				I’ve worked on tons of little projects over the years but these are the ones that
				I’m most proud of. Many of them are open-source, so if you see something that piques
				your interest, check out the code and contribute if you have ideas for how it can be
				improved.
			</p>
		</div>
	</div>

	<!-- Dynamic Tabs -->
	<Tabs.Root bind:value={activeTab} class="my-5">
		<Tabs.List class="flex">
			{#each categories as category}
				<Tabs.Trigger
					class="w-1/3 hover:text-primary"
					value={category}
					on:click={() => handleTabClick(category)}>{category}</Tabs.Trigger
				>
			{/each}
		</Tabs.List>
		{#each categories as category}
			<Tabs.Content value={category}>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{#each categorized as { name, description, href, tags, host, state }}
						<a {href} class="group">
							<div class="flex h-full flex-col">
								<div
									class="flex h-full flex-col justify-between rounded-lg border p-4 shadow-md"
								>
									<!-- Card content -->
									<h3 class="mb-2 text-xl font-semibold">{name}</h3>
									<p class="mb-4">{description}</p>
									<div class="flex flex-wrap gap-3">
										{#each tags as tag}
											<Badge>{tag}</Badge>
										{/each}
									</div>
									<div class="mt-8 flex items-center justify-between">
										<div class="flex items-center gap-2">
											<Link />
											<span class="group-hover:text-primary">{host}</span>
										</div>
										<span
											class={cn(`
                                                ${state === 'In Progress' ? 'group-hover:text-yellow-400' : ''}
                                                ${state === 'Completed' ? 'group-hover:text-green-400' : ''}
                                            `)}>{state}</span
										>
									</div>
								</div>
							</div>
						</a>
					{/each}
				</div>
			</Tabs.Content>
		{/each}
	</Tabs.Root>

	<!-- <Pagination.Root {count} {perPage} {siblingCount} let:pages let:currentPage>
		<Pagination.Content>
			<Pagination.Item>
				<Pagination.PrevButton />
			</Pagination.Item>
			{#each pages as page (page.key)}
				{#if page.type === 'ellipsis'}
					<Pagination.Item>
						<Pagination.Ellipsis />
					</Pagination.Item>
				{:else}
					<Pagination.Item>
						<Pagination.Link {page} isActive={currentPage == page.value}>
							{page.value}
						</Pagination.Link>
					</Pagination.Item>
				{/if}
			{/each}
			<Pagination.Item>
				<Pagination.NextButton />
			</Pagination.Item>
		</Pagination.Content>
	</Pagination.Root> -->
</div>

<!-- Old code -->
<!-- <div class={cn('flex pt-5')}>
		{#each tabs as tab (tab.label)}
			<button
				on:click={() => handleTabClick(tab.label)}
				class={cn(`
					{activeTab === tab.label
					? 'active font-medium'
						: 'w-1/4 font-medium'} w-1/4 border-b-2 border-b-2 border-purple-400 border-purple-400 border-transparent border-transparent border-zinc-200
						bg-zinc-800 px-1 px-1 py-4 py-4 text-center text-center text-sm text-sm text-purple-400 text-purple-400 text-zinc-200 hover:border-b-2 hover:border-purple-300 hover:text-purple-300
				`)}
			>
				{tab.label}
			</button>
		{/each}
	</div> -->

<!-- <div
		class={cn(`
			grid grid-cols-1 gap-x-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
		`)}
	>
		{#each categorized as { name, description, href, tags, host, state }}
			<ul class="group mt-10 rounded-xl px-5 py-5 shadow-xl hover:bg-zinc-800">
				<a {href} class="group">
					<h1 class="mt-5 text-zinc-100">
						{name}
					</h1>

					<h2 class="mt-5 text-sm text-zinc-500">
						{description}
					</h2>

					<li class="mt-5 text-zinc-300">
						{#if tags}
							<div class="flex flex-wrap">
								{#each tags as tag}
									<span
										class={cn(`
											mb-2 mr-2 overflow-ellipsis whitespace-nowrap rounded-md bg-zinc-600 px-1 py-1 text-sm
										`)}
									>
										{`# ${tag}`}
									</span>
								{/each}
							</div>
						{/if}
					</li>

					<div
						class={cn(`
							mt-5 flex flex items-end items-center justify-between text-zinc-200 transition-colors group-hover:text-purple-400
						`)}
					>
						<div class="flex items-center">
							<Link />
							<span class="ml-2">{host}</span>
						</div>
						<div>
							<span
								class={cn(`
									{state === 'In Progress'
										? 'group-hover:text-yellow-400'
										: state === 'Completed'
											? 'group-hover:text-green-400'
											: ''}
								`)}
							>
								{state}
							</span>
						</div>
					</div>
				</a>
			</ul>
		{/each}
	</div> -->
<!-- </div> -->

<!-- {#each categorized as { name, description, href, tags, host, state }}
                    <ul class="group mt-10 rounded-xl px-5 py-5 shadow-xl hover:bg-zinc-800">
                        <a {href} class="group">
                            <h1 class="mt-5 text-zinc-100">{name}</h1>
                            <h2 class="mt-5 text-sm text-zinc-500">{description}</h2>
                            <li class="mt-5 text-zinc-300">
                                {#if tags}
                                    <div class="flex flex-wrap">
                                        {#each tags as tag}
                                            <span class={cn(`mb-2 mr-2 overflow-ellipsis whitespace-nowrap rounded-md bg-zinc-600 px-1 py-1 text-sm`)}>
                                                {`# ${tag}`}
                                            </span>
                                        {/each}
                                    </div>
                                {/if}
                            </li>
                            <div class={cn(`mt-5 flex flex items-end items-center justify-between text-zinc-200 transition-colors group-hover:text-purple-400`)}>
                                <div class="flex items-center">
                                    <Link />
                                    <span class="ml-2">{host}</span>
                                </div>
                                <div>
                                    <span class={cn(`{state === 'In Progress' ? 'group-hover:text-yellow-400' : state === 'Completed' ? 'group-hover:text-green-400' : ''}`)}>{state}</span>
                                </div>
                            </div>
                        </a>
                    </ul>
                {/each} -->
