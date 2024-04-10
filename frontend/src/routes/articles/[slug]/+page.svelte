<script>
	import { cn, formatDate } from '$source/lib/utils';
	import * as Breadcrumb from '$shadcn/breadcrumb';
	import * as Card from '$lib/components/ui/card';

	export let data;

	$: ({ discussion } = data);
</script>

<div class={cn('my-16 sm:mb-52 sm:mt-32')}>
	<Breadcrumb.Root>
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link asChild let:attrs>
					<a href="articles" {...attrs}>Articles</a>
				</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Page>{discussion.title}</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>

	<Card.Root class="mt-5">
		<Card.Header>
			<Card.Title
				><h2 class="mb-5 text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
					{discussion.title}
				</h2></Card.Title
			>
			<Card.Description>{formatDate(discussion.createdAt)}</Card.Description>
		</Card.Header>
		<Card.Content>
			<div class="mt-5">
				<div class="prose dark:prose-invert text-wrap">
					{@html discussion.bodyHTML}
				</div>
			</div>
		</Card.Content>
	</Card.Root>
</div>
