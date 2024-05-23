<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '@/shared/lib/utils';
	import navigations from '../model/nav';

	function scrollToTop() {
		document.getElementById('logo')?.scrollIntoView({ behavior: 'instant' });
	}
</script>

<header
	id="logo"
	class={cn('relative block flex items-center justify-between p-4 px-3 py-2 shadow transition')}
>
	<div class="flex items-center justify-between">
		<a href="/" class="flex items-center">
			<span
				class={cn('ml-10 w-[130px] font-graffiti text-3xl font-bold  hover:text-primary sm:ml-16')}
				>Shohin A</span
			>
		</a>
	</div>

	<!-- Desktop -->
	<nav
		class={cn(
			'flex  hidden items-center rounded-full bg-zinc-800/90 px-3 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 ring-2 ring-inset ring-white/10 ring-zinc-600 ring-zinc-900/5 backdrop-blur sm:mr-5 sm:flex'
		)}
	>
		<ul class="flex grid grid-cols-3 items-center space-x-4 text-center md:grid-cols-4">
			{#each navigations.desktop as { href, name }}
				<li
					aria-current={$page.url.pathname === href ? 'page' : undefined}
					class={cn('inline-block px-4 py-2')}
				>
					<a {href} class={cn($page.url.pathname === href ? 'text-primary' : 'hover:text-primary')}
						>{name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="flex items-center space-x-4"></div>
</header>

<!-- Mobile -->
<div
	class="fixed bottom-0 left-0 z-50 h-16 w-full border-t border-secondary bg-secondary sm:hidden"
>
	<div class="mx-auto grid h-full max-w-lg grid-cols-4">
		{#each navigations.mobile as { href, name, icon }}
			<a
				on:click={scrollToTop}
				{href}
				data-tooltip-target={'tooltip-' + href}
				class={cn(
					`scroll-behavior group inline-flex flex-col items-center justify-center border-x border-muted-foreground ${$page.url.pathname === href ? 'group flex gap-x-3  p-2 text-sm leading-6 text-primary' : 'group flex gap-x-3 p-2 text-sm font-semibold leading-6'}`
				)}
			>
				{#if icon}
					<span class="flex-shrink-0">
						<svelte:component this={icon} />
					</span>
				{/if}
				<span class="truncate">{name}</span>
			</a>

			<div
				id={'tooltip-' + href}
				role="tooltip"
				class={cn(
					`tooltip invisible absolute z-10 inline-block px-3 py-2 text-sm text-accent opacity-0 shadow-sm transition-opacity duration-300`
				)}
			>
				{name}
				<div class="tooltip-arrow" data-popper-arrow></div>
			</div>
		{/each}
	</div>
</div>
