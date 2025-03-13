<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import {
		Download,
		PWA,
		Cloudflare,
		Svelte,
		TypeScript,
		Telegram,
		GitHub,
		Instagram,
		LinkedIn,
		Steam,
		X
	} from '@/lib/icons';

	import type { Component } from 'svelte';

	let professional = $state([
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/shohin-abdulkhamidov/',
			host: 'linkedin.com',
			icon: LinkedIn
		},
		{
			name: 'GitHub',
			href: 'https://www.github.com/shohinsan',
			host: 'github.com',
			icon: GitHub
		}
	]);

	let personal = $state([
		{
			name: 'Telegram',
			href: 'https://t.me/shohinsan',
			host: 'telegram.org',
			icon: Telegram
		},
		{
			name: 'Instagram',
			href: 'https://www.instagram.com/shohin.abd',
			host: 'instagram.com',
			icon: Instagram
		},
		{
			name: 'Steam',
			href: 'https://steamcommunity.com/id/shohinsan',
			host: 'steamcommunity.com',
			icon: Steam
		},
		{
			name: 'X',
			href: 'https://twitter.com/shohinx',
			host: 'x.com',
			icon: X
		}
	]);
</script>

<svelte:head>
	<title>Shohin's Portfolio</title>
	<meta name="twitter:title" content="Shohin's Portfolio" />
	<meta
		name="twitter:description"
		content="Explore Shohin's portfolio, projects, and expertise in software development."
	/>
	<meta
		name="description"
		content="Explore Shohin's portfolio, projects, and expertise in software development."
	/>
</svelte:head>

<section class="my-16 sm:mt-32 sm:mb-52">
	<div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
		<aside class="lg:pl-20">
			{@render portrait()}
		</aside>
		<article class="lg:order-first lg:row-span-2">
			<h1 class="text-4xl font-bold tracking-tight">
				I’m Shohin Abdulkhamidov, an inspiring Software Engineer based in California
			</h1>
			<div class="mt-6 space-y-7 text-base">
				{@render story()}

				{@render stack()}

				<p>
					Feel free to reach out if you're looking for a new grad developer, have a question, or
					just want to connect
				</p>
			</div>
		</article>

		<aside class="lg:pl-20">
			<form method="GET" action="SHOHIN_ABDULKHAMIDOV_RESUME" use:enhance>
				<button
					type="submit"
					class="group ring:bg-primary my-4 mb-8 flex w-full items-center justify-center rounded-md text-center ring-1 hover:bg-gray-400 active:bg-gray-500"
				>
					<span class="my-2 mr-5">Download CV</span>
					<Download />
				</button>
			</form>

			{#each professional as { name, href, icon }}
				{@render links('professional links', name, href, icon)}
			{/each}

			<div class="mt-8 border-t border-zinc-700/40 pt-8"></div>

			{#each personal as { name, href, icon }}
				{@render links('personal links', name, href, icon)}
			{/each}
		</aside>
	</div>
</section>

<!-- Snippets -->

{#snippet portrait()}
	<figure class="max-w-xs px-2.5 lg:max-w-none">
		<img
			src="https://pub-c1d83372ed0146a9ae11bca340543efb.r2.dev/me.png"
			alt="Shohin Abdulkhamidov"
			class="aspect-square rotate-3 rounded-2xl bg-zinc-800 object-cover"
		/>
	</figure>
{/snippet}

{#snippet stack()}
	<div class="flex gap-4 select-none">
		<Cloudflare width={36} height={36} />
		<PWA width={36} height={36} />
		<Svelte width={36} height={36} />
		<TypeScript width={36} height={36} />
		<Telegram width={36} height={36} />
	</div>
{/snippet}

{#snippet links(aria: string, name: string, href: string, icon: Component)}
	<nav aria-label={aria}>
		<ul class="mt-4 space-y-4">
			<a
				{href}
				aria-current={page.url.pathname === href ? 'page' : undefined}
				class="flex items-center"
			>
				{#if icon}
					{@const SvelteComponent = icon}
					<span class="flex-shrink-0">
						<SvelteComponent />
					</span>
				{/if}
				<span class="inline-block px-4 py-2">{name}</span>
			</a>
		</ul>
	</nav>
{/snippet}

{#snippet story()}
	<p>
		Born and raised in Tajikistan, I moved to the United States in 2017 to pursue my dream of
		becoming a Software Engineer. I graduated from San Jose State University, majoring in Software
		Engineering. I am passionate about building software that makes a difference in people's lives
	</p>
	<p>
		When I am not coding, I enjoy playing soccer and hiking. Gaming is also another passion of mine,
		and I'm always looking for ways to add more excitement to my gaming experience or improve my
		skills. It's a fantastic way for me to unwind and have some fun
	</p>

	<h2 class="text-4xl font-bold tracking-tight">Technologies I've been working with recently</h2>
	<p>
		React, Svelte, TypeScript, Java, and Python. I'm now expanding my skill set even further by
		learning Golang and eventually making it my main go-to language. Lately, due to the AI hype,
		I've become curious about PyTorch and AutoGen. Additionally, I keep up with technology news by
		reading <a class="hover:text-primary text-blue-500" href="https://refer.tldr.tech/0f5ffe59"
			>tldr.tech newsletters</a
		>
	</p>
{/snippet}
