<script lang="ts">
	import { cn } from '$source/lib/utils';
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import { ContactForm } from '$components/system/index';
	export let data: PageData;
</script>

<svelte:head>
	<title>Contact - Connect with Shohin</title>
	<meta name="twitter:title" content="Contact form" />
	<meta name="twitter:description" content="Get in touch with Shohin" />
	<meta name="Description" content="Get in touch with Shohin" />
</svelte:head>

<div class={cn('my-16 sm:mb-52 sm:mt-32')}>
	<div
		class="grid grid-cols-1 gap-y-16 lg:max-w-[700px] lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-y-12"
	>
		<div class="lg:order-first lg:row-span-2">
			<h2 class="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">Contact</h2>
			<p class="mt-6 text-base text-zinc-400">
				Please feel free to contact me if you have any questions or would like to discuss a project.
			</p>
		</div>

		<Card.Root>
			<Card.Header>
				<Card.Title>Form</Card.Title>
				<Card.Description>
					Please fill out the form below and I'll get back to you as soon as possible.
				</Card.Description>
			</Card.Header>
			<Card.Content>
				<ContactForm data={data.form} />
			</Card.Content>
		</Card.Root>
	</div>
</div>
