<script lang="ts">
	import { page } from '$app/stores'
	import { Download, PWA, Cloudflare, Svelte, TypeScript, Telegram } from '@/shared/icons'
	import { cn } from '@/shared/lib/utils'
	import site from '@/app/site'
	import { Button } from '@/shared/ui/button'
	import link from '@/shared/lib/link'
</script>

<svelte:head>
	<title>{site.createSite.name}</title>
	<meta name="twitter:title" content={site.createSite.name} />
	<meta name="twitter:description" content={site.createSite.description} />
	<meta name="description" content={site.createSite.description} />
</svelte:head>

<section class={cn('my-16 sm:mb-52 sm:mt-32')}>
	<div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
		<aside class="lg:pl-20">
			<figure class="max-w-xs px-2.5 lg:max-w-none">
				<img
					src="https://pub-c1d83372ed0146a9ae11bca340543efb.r2.dev/me.png"
					alt="Shohin Abdulkhamidov"
					class="aspect-square rotate-3 rounded-2xl bg-zinc-800 object-cover"
				/>
			</figure>
		</aside>
		<article class="lg:order-first lg:row-span-2">
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

				<h2 class="text-2xl font-bold">Technologies I've been working with recently:</h2>
				<p>
					SvelteKit, NextJS, Java, and Python. I'm now expanding my skill set even further
					by learning Golang and eventually making it my main go-to language. Lately, due
					to the AI hype, I've become curious about PyTorch and AutoGen. Additionally, I
					keep up with technology news by reading <a
						class="text-blue-500 hover:text-primary"
						href="https://refer.tldr.tech/0f5ffe59">tldr.tech newsletters</a
					>.
				</p>

				<div class="flex gap-4 select-none">
					<Cloudflare width={36} height={36} />
					<PWA width={36} height={36} />
					<Svelte width={36} height={36} />
					<TypeScript width={36} height={36} />
					<Telegram width={36} height={36} />
				</div>

				<p>
					Feel free to reach out if you're looking for a new grad developer, have a
					question, or just want to connect.
				</p>
			</div>
		</article>

		<aside class="lg:pl-20">
			<form method="GET" action="SHOHIN_ABDULKHAMIDOV_RESUME">
				<Button
					type="submit"
					class={cn(`
						group mb-8 flex w-full items-center justify-center rounded-md px-3 text-center
					`)}
				>
					<span class="mr-5">Download CV</span>
					<Download />
				</Button>
			</form>

			<nav aria-label="Professional links">
				<ul>
					{#each link.professional as { name, href, icon }}
						<li>
							<a
								class={cn(`
									group flex items-center text-sm font-medium transition hover:text-primary
								`)}
								{href}
								aria-current={$page.url.pathname === href ? 'page' : undefined}
							>
								{#if icon}
									<span class="flex-shrink-0">
										<svelte:component this={icon} />
									</span>
								{/if}
								<span class="inline-block px-4 py-2">{name}</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<div class="mt-8 border-t border-zinc-700/40 pt-8" />

			<nav aria-label="Personal links">
				<ul>
					{#each link.personal as { name, href, icon }}
						<li>
							<a
								class={cn(`
									group flex items-center text-sm font-medium transition hover:text-primary
								`)}
								{href}
								aria-current={$page.url.pathname === href ? 'page' : undefined}
							>
								{#if icon}
									<span class="flex-shrink-0">
										<svelte:component this={icon} />
									</span>
								{/if}
								<span class="inline-block px-4 py-2">{name}</span>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</aside>
	</div>
</section>
