<script>
	export let currentYear = new Date().getFullYear();
	import { navigations } from '$seeds';
	import { page } from '$app/stores';
	import { scrollToTop } from '$source/lib/utils';
</script>

<footer class="flex-none">
	<div class="border-t border-secondary pb-28 pt-10 sm:pb-10">
		<div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
			<div class="flex flex-wrap justify-center gap-y-1 text-sm font-medium">
				{#each navigations.desktop as { href, name }}
					<li
						aria-current={$page.url.pathname === href ? 'page' : undefined}
						class="inline-block px-2 py-2"
					>
						<a
							{href}
							on:click={scrollToTop}
							class="transition-colors duration-300 ease-in-out hover:text-primary">{name}</a
						>
						{#if name !== 'Contact'}
							<span class="ml-2">•</span>
						{/if}
					</li>
				{/each}
			</div>
			<p class="text-sm">
				&copy; {currentYear} Shohin A. All rights reserved.
			</p>
		</div>
	</div>
</footer>
