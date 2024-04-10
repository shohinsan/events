<script lang="ts">
	import { cn } from '$source/lib/utils';
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import ContactForm from '$components/system/ContactForm.svelte';
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

<!-- 
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

		<form
			class={cn('mt-10 rounded-2xl border border-zinc-700/40 p-6')}
			use:enhance={() =>
				({ update }) => {
					update({ reset: true });
					toast();
				}}
			method="POST"
		>
			<h2 class="flex text-sm font-semibold text-zinc-100">
				<span>Email Form</span>
			</h2>
			<p class="mt-2 text-sm text-zinc-400">
				Please fill out the form below and I'll get back to you as soon as possible.
			</p>

			<div class="mt-6 flex flex-col">
				<label class="mb-1 select-none text-sm font-semibold text-zinc-400" for="name">
					Name
					<span class="ml-2 text-red-500">✶</span>
				</label>

				<input
					name="name"
					autocomplete="name"
					type="text"
					aria-label="Name"
					class={cn(`
                        min-w-0 flex-auto appearance-none rounded-md border border-zinc-700 bg-white bg-zinc-700/[0.15] px-3 py-[calc(theme(spacing.2)-1px)] text-zinc-200 shadow-md shadow-zinc-800/5 placeholder:text-zinc-500 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-400/10 sm:text-sm
                    `)}
				/>
			</div>

			{#if form?.errors?.nameMissing}
				<p class="mt-3 text-red-500">{form.errors.nameMissing}</p>
			{/if}

			<div class="mt-6 flex flex-col">
				<label class="mb-1 select-none text-sm font-semibold text-zinc-400" for="phone">
					Phone
				</label>
				<input
					name="phone"
					type="tel"
					aria-label="Phone Number"
					class={cn(`
                        min-w-0 appearance-none rounded-md border border-zinc-700 bg-white bg-zinc-700/[0.15] px-3 py-[calc(theme(spacing.2)-1px)] text-zinc-200 shadow-md shadow-zinc-800/5 placeholder:text-zinc-500 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-400/10 sm:text-sm
                    `)}
				/>
			</div>

			{#if form?.errors?.phoneFormat}
				<p class="mt-3 text-red-500">{form.errors.phoneFormat}</p>
			{/if}

			{#if form?.errors?.phoneLimit}
				<p class="mt-3 text-red-500">{form.errors.phoneLimit}</p>
			{/if}

			<div class="mt-6 flex flex-col">
				<label class="mb-1 select-none text-sm font-semibold text-zinc-400" for="email">
					Email
					<span class="ml-2 text-red-500">✶</span>
				</label>

				<input
					name="email"
					autocomplete="email"
					type="email"
					aria-label="Email address"
					class={cn(`
                        min-w-0 flex-auto appearance-none rounded-md border border-zinc-700 bg-white bg-zinc-700/[0.15] px-3 py-[calc(theme(spacing.2)-1px)] text-zinc-200 shadow-md shadow-zinc-800/5 placeholder:text-zinc-500 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-400/10 sm:text-sm
                    `)}
				/>
			</div>

			{#if form?.errors?.emailMissing}
				<p class="mt-3 text-red-500">{form.errors.emailMissing}</p>
			{/if}

			{#if form?.errors?.emailFormat}
				<p class="mt-3 text-red-500">{form.errors.emailFormat}</p>
			{/if}

			<div class="mt-6 flex flex-col">
				<label class="mb-1 select-none text-sm font-semibold text-zinc-400" for="message">
					Message
					<span class="ml-2 text-red-500">✶</span>
				</label>

				<textarea
					name="message"
					aria-label="Message"
					rows="4"
					class={cn(`
                        min-w-0 flex-auto appearance-none rounded-md border border-zinc-700 bg-white bg-zinc-700/[0.15] px-3 py-[calc(theme(spacing.2)-1px)] text-zinc-200 shadow-md shadow-zinc-800/5 placeholder:text-zinc-500 focus:border-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-400/10 sm:text-sm
                    `)}
				/>
			</div>

			{#if form?.errors?.messageMissing}
				<p class="mt-3 text-red-500">{form.errors.messageMissing}</p>
			{/if}

			<div class="mt-6">
				<button
					type="submit"
					class="w-1/2 rounded-md bg-purple-600 px-4 py-2 text-center text-white hover:bg-purple-700"
				>
					Send
				</button>
			</div>

			<div>
				{#if status && !form?.errors}
					<p class="mt-5 text-purple-400">Email has been sent</p>
				{/if}
			</div>
		</form>
	</div>
</div> -->
