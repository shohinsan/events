<script lang="ts">
	let status = '';

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		fetch('/api/smtp', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((res) => {
				status = 'success';
			})
			.catch((err) => {
				status = 'error';
			})
			.finally(() => {
				form.reset();
				setTimeout(() => (status = ''), 5000);
			});
	};
	
</script>

<div class="mt-16 sm:mt-32">
	<div
		class="grid grid-cols-1 gap-y-16 lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-y-12 lg:max-w-[700px]"
	>
		<div class="lg:order-first lg:row-span-2">
			<h2 class="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">Contact me here</h2>

			<p class="mt-6 text-base text-zinc-400">
				I’ve worked on tons of little projects over the years but these are the ones that I’m most
				proud of. Many of them are open-source, so if you see something that piques your interest,
				check out the code and contribute if you have ideas for how it can be improved.
			</p>
		</div>

		<form on:submit={handleSubmit} class="rounded-2xl mt-10 border p-6 border-zinc-700/40">
			<h2 class="flex text-sm font-semibold text-zinc-100">
				<span>Email Form</span>
			</h2>
			<p class="mt-2 text-sm text-zinc-400">
				Please fill out the form below and I'll get back to you as soon as possible.
			</p>

			<input type="hidden" name="access_key" value="ba3c1bc3-5ea1-4468-b24f-d712fecd17f7" />
			<input type="hidden" name="subject" value="Personal Website Contact Form" />
			<input type="hidden" name="from_name" value="NEW MESSAGE" />

			<div class="mt-6 flex">
				<input
					placeholder="Name"
					aria-label="Name"
					type="text"
					name="name"
					class="min-w-0 flex-auto appearance-none rounded-md
			border bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5
			focus:outline-none focus:ring-4 border-zinc-700 bg-zinc-700/[0.15] text-zinc-200 placeholder:text-zinc-500 focus:border-teal-400 focus:ring-teal-400/10 sm:text-sm"
				/>
			</div>


			<div class="mt-6 flex">
				<input
					type="email"
					name="email"
				
					placeholder="Email address"
					aria-label="Email address"
					class="min-w-0 flex-auto appearance-none rounded-md
                        border bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5
                        focus:outline-none focus:ring-4 border-zinc-700 bg-zinc-700/[0.15] text-zinc-200 placeholder:text-zinc-500 focus:border-teal-400 focus:ring-teal-400/10 sm:text-sm"
				/>
			</div>

			<div class="mt-6 flex">
				<textarea
					name="message"
					placeholder="Message"
					aria-label="Message"
					rows="4"
					class="min-w-0 flex-auto appearance-none rounded-md
                        border bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5
                        focus:outline-none focus:ring-4 border-zinc-700 bg-zinc-700/[0.15] text-zinc-200 placeholder:text-zinc-500 focus:border-teal-400 focus:ring-teal-400/10 sm:text-sm"
				/>
			</div>

			<div class="mt-6">
				<button
					type="submit"
					class="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md w-1/2 text-center"
				>
					Send
				</button>
			</div>

			<div class="mt-5 text-teal-400">
				{#if status === 'success'}
					<p>Email has been sent</p>
				{:else if status === 'error'}
					<p>Something went wrong. Please try again.</p>
				{/if}
			</div>
		</form>
	</div>
</div>