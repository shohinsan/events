<script lang="ts">
	import Logo from '$lib/icons/Logo.svelte';
	import { navConfig } from '$lib/nav';
	import { page } from '$app/stores';
</script>

<header class="p-4 shadow flex justify-between items-center relative block px-3 py-2 transition">
	<div class="flex justify-between items-center">
		<a href="/" class="flex items-center">
			<Logo />
		</a>
	</div>
	<nav
		class="ml-4 hidden sm:flex items-center flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10"
	>
		<ul class="flex text-center items-center space-x-4">
			{#each navConfig.desktopNavigation as { name, href }}
				<li
					aria-current={$page.url.pathname === href ? 'page' : undefined}
					class="inline-block py-2 px-4"
				>
					<a {href} class={$page.url.pathname === href ? 'text-teal-400' : 'hover:text-teal-400'}
						>{name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
	<div class="flex items-center space-x-4"></div>
</header>
