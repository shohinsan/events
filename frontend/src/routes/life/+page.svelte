<script>
	import { Timeline } from '$components';
	import { events } from '$seeds';
</script>

<svelte:head>
	<title>Life events - my life experience</title>
	<meta name="twitter:title" content="Life events" />
	<meta name="twitter:description" content="Things I have experienced in my life" />
	<meta name="Description" content="Things I have experienced in my life" />
</svelte:head>

<div class="mt-16 sm:mt-32 sm:mb-52">
	<div
		class="grid grid-cols-1 gap-y-16 lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-y-12 lg:max-w-[700px]"
	>
		<div class="lg:order-first lg:row-span-2">
			<h2 class="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">Life events</h2>
			<p class="mt-6 text-base text-zinc-400">
				Short snippets of things I have experienced in my life.
			</p>
		</div>

		<div class="relative flex-auto">
			<Timeline />

			<div class="space-y-10 py-10">
				{#each events as { date, description }}
					<header class="relative">
						<div class="pointer-events-none top-0 flex h-4 items-center gap-x-2">
							<div class="h-[0.0625rem] w-3.5 bg-gray-400" />
							<div class="text-zinc-400 text-sm">
								{date}
							</div>
						</div>
						<div class="text-zinc-200 text-sm ml-5 mt-5">
							{description}
						</div>
					</header>
				{/each}
			</div>
		</div>
	</div>
</div>