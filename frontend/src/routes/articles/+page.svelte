<script lang="ts">
	import { cn, formatDate } from '$source/lib/utils';
	export let data;
	import { Link } from '$icons';
	import * as Pagination from '$shadcn/pagination';
	import * as Card from '$shadcn/card';

	$: ({ nodes } = data);
</script>

<div class={cn('my-16 sm:mb-52 sm:mt-32')}>
	<div
		class="grid grid-cols-1 gap-y-16 lg:max-w-[700px] lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-y-12"
	>
		<div class="lg:order-first lg:row-span-2">
			<h2 class="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">Articles</h2>

			<p class="mt-6 text-base text-zinc-400">
				Here are some of the case studies I've written. I hope you find them helpful.
			</p>
		</div>
	</div>
	<ul class="my-5 grid grid-cols-1 gap-y-8">
		{#each nodes as { title, number, slug, createdAt }}
			<li>
				<a href="articles/{slug}-{number}" class="group">
					<Card.Root>
						<Card.Header>
							<Card.Title>{number}. {title}</Card.Title>
							<Card.Description>{formatDate(createdAt)}</Card.Description>
						</Card.Header>
						<Card.Footer>
							<Link />
							<span class="ml-4 group-hover:text-primary">Read more</span>
						</Card.Footer>
					</Card.Root>
				</a>
			</li>
		{/each}
	</ul>
</div>
