<script>
	export let currentYear = new Date().getFullYear();
    import { navConfig } from '$lib';
    import { page } from '$app/stores';
    
</script>

<footer class="flex-none">
	<div class="border-t pb-28 sm:pb-10 pt-10 border-zinc-700/40">
		<div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
			<div
				class="flex flex-wrap justify-center gap-y-1 text-sm font-medium text-zinc-200"
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
			<p class="text-sm text-zinc-500">
				&copy; {currentYear} Shohin A. All rights reserved.
			</p>
		</div>
	</div>
</footer>
