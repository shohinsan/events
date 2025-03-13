<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';

	let form = $derived(page.form);
</script>

<svelte:head>
	<title>Contact - Connect with Shohin</title>
	<meta name="twitter:title" content="Contact form" />
	<meta name="twitter:description" content="Get in touch with Shohin" />
	<meta name="Description" content="Get in touch with Shohin" />
</svelte:head>

<div class="container mx-auto px-6 py-16 sm:py-24 lg:py-32">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-4xl font-extrabold text-white sm:text-5xl">Contact Me</h2>
		<p class="mt-4 text-lg text-zinc-400">
			Feel free to reach out if you have any questions or want to collaborate.
		</p>
	</div>

	<div class="mx-auto mt-12 max-w-2xl rounded-xl bg-zinc-900 p-8 shadow-xl">
		<form class="grid grid-cols-1 gap-6 sm:grid-cols-2" use:enhance method="POST">
			<div class="col-span-2">
				{@render field('name', 'Name', 'text', true)}
				{@render errs({ name: 'name' })}
			</div>

			<div class="col-span-2">
				{@render field('phone', 'Phone', 'tel', false)}
				{@render errs({ name: 'phone' })}
			</div>

			<div class="col-span-2">
				{@render field('email', 'Email', 'email', true)}
				{@render errs({ name: 'email' })}
			</div>

			<div class="col-span-2">
				{@render field('message', 'Message', 'textarea', true)}
				{@render errs({ name: 'message' })}
			</div>

			<div class="col-span-2 flex justify-center">
				<button
					type="submit"
					class="w-full rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition duration-300 ease-in-out hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:outline-none sm:w-auto"
				>
					Send Message
				</button>
			</div>

			{#if form?.success}
				<div class="col-span-2">
					<p class="text-green-500">Message sent successfully!</p>
				</div>
			{/if}
		</form>
	</div>
</div>

<!-- Snippets -->

{#snippet errs({ name }: { name: string })}
	{#if form?.errors}
		{#each form.errors.filter((err: { field: string }) => err.field === name) as err}
			<p class="mt-1 text-sm text-red-500">{err.message}</p>
		{/each}
	{/if}
{/snippet}

{#snippet field(name: string, label: string, type: string, required: boolean)}
	<div class="col-span-2">
		<label for={name} class="text-sm text-zinc-400">
			{label}
			{#if required}<span class="text-red-500">*</span>{/if}
		</label>
		{#if type === 'textarea'}
			<textarea
				id={name}
				{name}
				rows="4"
				class="mt-2 w-full rounded-lg bg-zinc-800 p-3 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
			></textarea>
		{:else}
			<input
				id={name}
				{type}
				{name}
				class="mt-2 w-full rounded-lg bg-zinc-800 p-3 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
			/>
		{/if}
	</div>
{/snippet}
