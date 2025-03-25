<script lang="ts">
	import { page } from '$app/state';
	import { Contact, Projects, About } from '../icons';

	let navigations = $state([
		{ name: 'About', href: '/', icon: About },
		{ name: 'Projects', href: '/projects', icon: Projects },
		{ name: 'Contact', href: '/contact', icon: Contact }
	]);

	function scrollToTop() {
		document.getElementById('logo')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<header id="logo" class="relative mx-auto hidden justify-between p-4 transition md:flex">
	{@render logo()}
	<nav
		class="hidden rounded-full bg-zinc-800/90 px-3 text-sm font-medium ring-2 ring-zinc-900/5 backdrop-blur md:inline-flex"
	>
		{@render navigation({ icons: false })}
	</nav>
</header>

<div class="fixed bottom-0 left-0 z-50 w-full border-t border-zinc-900 md:hidden">
	<div class="mx-auto grid h-16 w-full grid-cols-3">
		{@render navigation({ icons: true })}
	</div>
</div>

{#snippet logo()}
	<div class="flex">
		<a href="/" class="flex">
			<span class="font-graffiti hover:text-primary w-[200px] text-3xl font-bold"> Shohin A </span>
		</a>
	</div>
{/snippet}

{#snippet navigation({ icons }: { icons: boolean })}
	{#each navigations as { name, href, icon }}
		<a
			onclick={icons ? scrollToTop : undefined}
			{href}
			class="transition-colors duration-200 {icons
				? 'flex flex-col items-center justify-center bg-zinc-700 p-2 text-sm leading-6'
				: 'px-4 py-2'}
				{page.url.pathname === href ? 'text-primary' : 'hover:text-primary'}"
			aria-label={name}
			aria-current={page.url.pathname === href ? 'page' : undefined}
		>
			{#if icons}
				{@const Icon = icon}
				<Icon />
				<span class="sr-only">{name}</span>
			{:else}
				{name}
			{/if}
		</a>
	{/each}
{/snippet}

<!-- after:ml-0.5 after:text-red-500 after:content-['*'] -->
