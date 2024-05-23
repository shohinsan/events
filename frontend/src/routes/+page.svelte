<script lang="ts">
	import { page } from '$app/stores'
	import { Download } from '@/shared/icons'
	import { cn } from '@/shared/lib/utils'
	import site from '@/app/site'
	import { Button } from '@/shared/ui/button'
	import link from '@/shared/lib/link'
</script>

<svelte:head>
	<title>{site.createSite.name}</title>
	<meta name="twitter:title" content={site.createSite.name} />
	<meta name="twitter:description" content={site.createSite.description} />
	<meta name="Description" content={site.createSite.description} />
</svelte:head>

<div class={cn('my-16 sm:mb-52 sm:mt-32')}>
	<div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
		<div class="lg:pl-20">
			<div class="max-w-xs px-2.5 lg:max-w-none">
				<img
					src="https://pub-c1d83372ed0146a9ae11bca340543efb.r2.dev/me.png"
					alt="Shohin Abdulkhamidov"
					class="aspect-square rotate-3 rounded-2xl bg-zinc-800 object-cover"
				/>
			</div>
		</div>
		<div class="lg:order-first lg:row-span-2">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				I’m Shohin Abdulkhamidov, an inspiring Software Engineer based in California.
			</h1>
			<div class="mt-6 space-y-7 text-base">
				<p>
					Born and raised in Tajikistan, I moved to the United States in 2017 to pursue my
					dream of becoming a Software Engineer. I graduated from San Jose State
					University, majoring in Software Engineering. I am passionate about building
					software that makes a difference in people's lives.
				</p>
				<p>
					When I am not coding, I enjoy playing soccer and hiking. Gaming is also another
					passion of mine, and I'm always looking for ways to add more excitement to my
					gaming experience or improve my skills. It's a fantastic way for me to unwind
					and have some fun.
				</p>

				<p>
					Here are a few technologies I've been working with recently:
					<span class="">SvelteKit, Java, and Python.</span>
					Now, I'm thinking about expanding my skill set even further by
					<span class="">learning Golang</span>
					and getting further into understanding at api architecture protocols before practicing.
					Other than that, keeping technology news in sync by reading
					<a class="text-blue-500 hover:text-primary" href="https://tldr.tech/"
						>tldr.tech newsletters</a
					>
				</p>
				<p>
					To mention, my personal website was built with <span class=""
						>SvelteKit, TypeScript, TailwindCSS,</span
					>
					deployed to
					<span>Cloudflare Pages,</span> integrated with
					<span>Telegram Bot API</span> for contact form submission, enabled
					<span class="">PWA</span>
					for download and offline use, and improved enabled <span class="">PWA</span> for
					download and offline use, and improved
					<span>Conversion Rate Optimization</span>.
				</p>
				<p>
					Feel free to reach out if you're looking for a new grad developer, have a
					question, or just want to connect.
				</p>
			</div>
		</div>
		<div class="lg:pl-20">
			<form method="GET" action="SHOHIN_ABDULKHAMIDOV_RESUME">
				<Button
					type="submit"
					class={cn(`
            group my-8 flex w-full items-center justify-center rounded-md px-3 py-2 text-center
        `)}
				>
					<span class="mr-5">Download CV</span>
					<Download /></Button
				>
			</form>

			{#each link.professional as { name, href, icon }}
				<ul
					role="list"
					class={cn(`
						group flex items-center text-sm font-medium transition hover:text-primary
					`)}
				>
					{#if icon}
						<span class="flex-shrink-0">
							<svelte:component this={icon} />
						</span>
					{/if}
					<li
						aria-current={$page.url.pathname === href ? 'page' : undefined}
						class={cn(`
							inline-block px-4 py-2
						`)}
					>
						<a {href}>{name}</a>
					</li>
				</ul>
			{/each}

			<div class="mt-8 border-t border-zinc-700/40 pt-8" />

			{#each link.personal as { name, href, icon }}
				<ul
					role="list"
					class={cn(`
						group flex items-center text-sm font-medium  transition hover:text-primary
					`)}
				>
					{#if icon}
						<span class="flex-shrink-0">
							<svelte:component this={icon} />
						</span>
					{/if}
					<li
						aria-current={$page.url.pathname === href ? 'page' : undefined}
						class={cn(`
							inline-block px-4 py-2
						`)}
					>
						<a {href}>{name}</a>
					</li>
				</ul>
			{/each}
		</div>
	</div>
</div>
