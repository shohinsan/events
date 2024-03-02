<script>
	import { page } from '$app/stores';
	import { Download } from '$icons';
	import { resume } from '$source';
	import { link, site } from '$seeds';

	export let data;

	const download = async () => {
		try {
			const blob = await (await fetch(resume)).blob();
			const url = URL.createObjectURL(blob);
			const a = Object.assign(document.createElement('a'), {
				href: url,
				download: 'Shohin_Abdulkhamidov_Resume.pdf'
			});
			a.click();
			setTimeout(() => URL.revokeObjectURL(url), 0);
		} catch (error) {
			console.error('Error fetching PDF or initiating download:', error);
		}
	};
</script>

<svelte:head>
	<title>{site.createSite.name}</title>
	<meta name="twitter:title" content={site.createSite.name} />
	<meta name="twitter:description" content={site.createSite.description} />
	<meta name="Description" content={site.createSite.description} />
</svelte:head>

<div class="my-16 sm:mt-32 sm:mb-52">
	<div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
		<div class="lg:pl-20">
			<div class="max-w-xs px-2.5 lg:max-w-none">
				<img
					src={data.myimage}
					alt="Shohin Abdulkhamidov"
					class="aspect-square rotate-3 rounded-2xl object-cover bg-zinc-800"
				/>
			</div>
		</div>
		<div class="lg:order-first lg:row-span-2">
			<h1 class="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
				I’m Shohin Abdulkhamidov, an inspiring Software Engineer based in California.
			</h1>
			<div class="mt-6 space-y-7 text-base text-zinc-400">
				<p>
					Born and raised in Tajikistan, I moved to the United States in 2017 to pursue my dream of
					becoming a Software Engineer. I graduated from San Jose State University, majoring in
					Software Engineering. I am passionate about building software that makes a difference in
					people's lives.
				</p>
				<p>
					When I am not coding, I enjoy playing soccer and hiking. Gaming is also another passion of
					mine, and I'm always looking for ways to add more excitement to my gaming experience or
					improve my skills. It's a fantastic way for me to unwind and have some fun.
				</p>
				
				<p>
					Here are a few technologies I've been working with recently:
					<span class="text-zinc-200">SvelteKit, Java, and Python.</span>
					Now, I'm thinking about expanding my skill set even further by
					<span class="text-zinc-200">learning Golang</span>
					and getting further into understanding at api architecture protocols before practicing. Other
					than that, keeping technology news in sync by reading
					<a class="text-blue-500 hover:text-purple-400" href="https://tldr.tech/"
						>tldr.tech newsletters</a
					>
				</p>
				<p>
					To mention, my personal website was built with <span class="text-zinc-200"
						>SvelteKit, TypeScript, TailwindCSS,</span
					>
					deployed to
					<span class="text-zinc-200">Cloudflare Pages,</span> integrated with
					<span class="text-zinc-200">Telegram Bot API</span>
					for contact form submission, enabled <span class="text-zinc-200">PWA</span> for download
					and offline use, and improved <span class="text-zinc-200">Conversion Rate Optimization</span>.
				</p>
				<p>
					Feel free to reach out if you're looking for a new grad developer, have a question, or
					just want to connect.
				</p>
			</div>
		</div>
		<div class="lg:pl-20">
			<button
				on:click={download}
				class="group bg-zinc-700 my-8 w-full rounded-md px-3 py-2 items-center text-center justify-center flex hover:bg-zinc-400"
			>
				<span class="mr-5">Download CV</span>
				<Download />
			</button>

			{#each link.professional as { name, href, icon }}
				<ul
					role="list"
					class="group flex items-center text-sm font-medium transition text-zinc-200 hover:text-purple-400"
				>
					{#if icon}
						<span class="flex-shrink-0">
							<svelte:component this={icon} />
						</span>
					{/if}
					<li
						aria-current={$page.url.pathname === href ? 'page' : undefined}
						class="inline-block py-2 px-4"
					>
						<a {href}>{name}</a>
					</li>
				</ul>
			{/each}

			<div class="mt-8 border-t pt-8 border-zinc-700/40" />

			{#each link.personal as { name, href, icon }}
				<ul
					role="list"
					class="group flex items-center text-sm font-medium transition text-zinc-200 hover:text-purple-400"
				>
					{#if icon}
						<span class="flex-shrink-0">
							<svelte:component this={icon} />
						</span>
					{/if}
					<li
						aria-current={$page.url.pathname === href ? 'page' : undefined}
						class="inline-block py-2 px-4"
					>
						<a {href}>{name}</a>
					</li>
				</ul>
			{/each}
		</div>
	</div>
</div>
