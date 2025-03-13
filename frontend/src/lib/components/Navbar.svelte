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

<header id="logo" class="relative mx-auto flex items-center justify-between p-4 shadow transition">
	{@render logo()}
	<nav
		class="hidden items-center rounded-full bg-zinc-800/90 px-3 text-sm font-medium shadow-lg ring-2 ring-zinc-900/5 backdrop-blur sm:flex"
	>
		{@render navigation({ icons: false })}
	</nav>
</header>

<div class="border-secondary bg-secondary fixed bottom-0 left-0 z-50 w-full border-t sm:hidden">
	<div class="mx-auto grid h-16 max-w-lg grid-cols-3">
		{@render navigation({ icons: true })}
	</div>
</div>

{#snippet logo()}
	<div class="flex items-center">
		<a href="/" class="flex items-center">
			<span class="font-graffiti hover:text-primary ml-10 w-[130px] text-3xl font-bold sm:ml-16">
				Shohin A
			</span>
		</a>
	</div>
{/snippet}

{#snippet navigation({ icons }: { icons: boolean })}
	{#each navigations as { name, href, icon }}
		<a
			onclick={icons ? scrollToTop : undefined}
			{href}
			class="transition-colors duration-200 {icons
				? 'flex flex-col items-center justify-center bg-zinc-600 p-2 text-sm leading-6'
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
