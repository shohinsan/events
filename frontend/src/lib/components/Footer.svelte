<script>
	export let currentYear = new Date().getFullYear();
    import { navConfig } from '$lib/nav';
    import { page } from '$app/stores';
    
</script>

<footer class="my-16 flex-none">
	<div class="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
		<div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
			<div
				class="flex flex-wrap justify-center gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200"
			>
				{#each navConfig.desktopNavigation as { name, href }}
					<li
						aria-current={$page.url.pathname === href ? 'page' : undefined}
						class="inline-block py-2 px-4"
					>
						<a {href} class='hover:text-teal-400'
							>{name}</a
						>
					</li>
				{/each}
			</div>
			<p class="text-sm text-zinc-400 dark:text-zinc-500">
				&copy; {currentYear} Shohin A. All rights reserved.
			</p>
		</div>
	</div>
</footer>
