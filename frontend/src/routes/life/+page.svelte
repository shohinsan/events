<script>
	import { Timeline } from '$components/system';
	import { events } from '$seeds';
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { cn } from '$source/lib/utils'; // Importing cn function
</script>

<svelte:head>
	<title>Life events - my life experience</title>
	<meta name="twitter:title" content="Life events" />
	<meta name="twitter:description" content="Things I have experienced in my life" />
	<meta name="Description" content="Things I have experienced in my life" />
</svelte:head>

<div class={cn('mt-16 sm:mb-52 sm:mt-32')}>
	<div
		class="grid grid-cols-1 gap-y-16 lg:max-w-[700px] lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-y-12"
	>
		<div class="lg:order-first lg:row-span-2">
			<h2 class="text-4xl font-bold tracking-tight sm:text-5xl">Life events.</h2>
			<p class="mt-6 text-base">Short snippets of things I have experienced in my life.</p>
		</div>

		<div class="relative flex-auto">
			<Timeline />

			<div class="space-y-10 py-10">
				{#each events as { date, title, description }}
					<header class="relative">
						<div class="pointer-events-none top-0 flex h-4 items-center gap-x-2">
							<div class="h-[0.0625rem] w-3.5 bg-gray-400" />
							<div class="text-sm">
								{date}
							</div>
						</div>
						<div class="ml-5 mt-5 text-sm">
							<Collapsible.Root>
								<Collapsible.Trigger class="hover:text-primary">{title}</Collapsible.Trigger>
								<Collapsible.Content class="mt-2">
									{description}
								</Collapsible.Content>
							</Collapsible.Root>
						</div>
					</header>
				{/each}
			</div>
		</div>
	</div>
</div>
