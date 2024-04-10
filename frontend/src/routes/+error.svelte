<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$shadcn/button';

	export let title: string;

	$: title = $page?.status
		? `${$page.status} - ${
				$page.status === 404 ? 'Not Found' : $page.status === 500 ? 'Server Error' : ''
			}`
		: '';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center">
	<main class="max-w-2xl rounded-md p-6 text-center">
		<Button class="ml-4 items-center ring-primary backdrop-blur" on:click={() => history.back()}>
			Go Back
		</Button>

		{#if $page?.status === 404}
			<h1 class="mt-4 text-2xl font-bold">Page Not Found</h1>
		{:else if $page?.status === 500}
			<h1 class="mt-4 text-2xl font-bold">
				Whoops. We weren't expecting that. We're investigating the issue.
			</h1>
		{/if}
	</main>
</div>
