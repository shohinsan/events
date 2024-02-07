<script lang="ts">
	let status = false;
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	export let form: ActionData;

	function toast() {
		status = true;
		setTimeout(() => (status = false), 4000);
	}
</script>

<svelte:head>
	<title>Contact - Connect with Shohin</title>
	<meta name="twitter:title" content="Contact form" />
	<meta name="twitter:description" content="Get in touch with Shohin" />
	<meta name="Description" content="Get in touch with Shohin" />
</svelte:head>

<div class="my-16 sm:mt-32 sm:mb-52">
	<div
		class="grid grid-cols-1 gap-y-16 lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-y-12 lg:max-w-[700px]"
	>
		<div class="lg:order-first lg:row-span-2">
			<h2 class="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">Contact</h2>

			<p class="mt-6 text-base text-zinc-400">
				Please feel free to contact me if you have any questions or would like to discuss a project.
			</p>
		</div>

		<form
			class="rounded-2xl mt-10 border p-6 border-zinc-700/40"
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
				<label class="text-sm font-semibold text-zinc-400 select-none mb-1" for="name">
					Name
					<span class="text-red-500 ml-2">✶</span>
				</label>

				<input
					name="name"
					autocomplete="name"
					type="text"
					aria-label="Name"
					class="min-w-0 flex-auto appearance-none rounded-md
			border bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5
			focus:outline-none focus:ring-4 border-zinc-700 bg-zinc-700/[0.15] text-zinc-200 placeholder:text-zinc-500 focus:border-teal-400 focus:ring-teal-400/10 sm:text-sm"
				/>
			</div>

			{#if form?.errors?.nameMissing}
				<p class="text-red-500 mt-3">{form.errors.nameMissing}</p>
			{/if}

			<div class="mt-6 flex flex-col">
				<label class="text-sm font-semibold text-zinc-400 select-none mb-1" for="phone">
					Phone
				</label>
				<input
					name="phone"
					type="tel"
					aria-label="Phone Number"
					class="min-w-0 appearance-none rounded-md
					border bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5
					focus:outline-none focus:ring-4 border-zinc-700 bg-zinc-700/[0.15] text-zinc-200 placeholder:text-zinc-500 focus:border-teal-400 focus:ring-teal-400/10 sm:text-sm"
				/>
			</div>

			{#if form?.errors?.phoneFormat}
				<p class="text-red-500 mt-3">{form.errors.phoneFormat}</p>
			{/if}

			{#if form?.errors?.phoneLimit}
				<p class="text-red-500 mt-3">{form.errors.phoneLimit}</p>
			{/if}

			<div class="mt-6 flex flex-col">
				<label class="text-sm font-semibold text-zinc-400 select-none mb-1" for="email">
					Email
					<span class="text-red-500 ml-2">✶</span>
				</label>

				<input
					name="email"
					autocomplete="email"
					type="email"
					aria-label="Email address"
					class="min-w-0 flex-auto appearance-none rounded-md
                        border bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5
                        focus:outline-none focus:ring-4 border-zinc-700 bg-zinc-700/[0.15] text-zinc-200 placeholder:text-zinc-500 focus:border-teal-400 focus:ring-teal-400/10 sm:text-sm"
				/>
			</div>

			{#if form?.errors?.emailMissing}
				<p class="text-red-500 mt-3">{form.errors.emailMissing}</p>
			{/if}

			{#if form?.errors?.emailFormat}
				<p class="text-red-500 mt-3">{form.errors.emailFormat}</p>
			{/if}

			<div class="mt-6 flex flex-col">
				<label class="text-sm font-semibold text-zinc-400 select-none mb-1" for="message">
					Message
					<span class="text-red-500 ml-2">✶</span>
				</label>

				<textarea
					name="message"
					aria-label="Message"
					rows="4"
					class="min-w-0 flex-auto appearance-none rounded-md
                        border bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5
                        focus:outline-none focus:ring-4 border-zinc-700 bg-zinc-700/[0.15] text-zinc-200 placeholder:text-zinc-500 focus:border-teal-400 focus:ring-teal-400/10 sm:text-sm"
				/>
			</div>

			{#if form?.errors?.messageMissing}
				<p class="text-red-500 mt-3">{form.errors.messageMissing}</p>
			{/if}

			<div class="mt-6">
				<button
					type="submit"
					class="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md w-1/2 text-center"
				>
					Send
				</button>
			</div>

			<div>
				{#if status && !form?.errors}
					<p class="mt-5 text-teal-400">Email has been sent</p>
				{/if}
			</div>
		</form>
	</div>
</div>
