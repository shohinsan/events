<script>
	import { page } from '$app/state';

	import About from '../icons/About.svelte';
	import Contact from '../icons/Contact.svelte';
	import Projects from '../icons/Projects.svelte';

	let { currentYear = new Date().getFullYear() } = $props();

	function scrollToTop() {
		document.getElementById('logo')?.scrollIntoView({ behavior: 'instant' });
	}

	let navigations = $state([
		{ name: 'About', href: '/', icon: About },
		{ name: 'Projects', href: '/projects', icon: Projects },
		{ name: 'Contact', href: '/contact', icon: Contact }
	]);
</script>

<footer class="flex-none">
	<div class="border-t border-zinc-700/40 pb-28 pt-10 sm:pb-10">
		<div class="flex flex-col items-center justify-between gap-6 lg:flex-row">
			<div class="flex flex-wrap justify-center gap-y-1 text-sm font-medium">
				{#each navigations as { href, name }}
					<li
						aria-current={page.url.pathname === href ? 'page' : undefined}
						class="inline-block px-2 py-2"
					>
						<a
							onclick={scrollToTop}
							{href}
							class="hover:text-primary transition-colors duration-300 ease-in-out">{name}</a
						>
						{#if name !== 'Contact'}
							<span class="ml-2">•</span>
						{/if}
					</li>
				{/each}
			</div>
			<a onclick={scrollToTop} href="privacy" class="text-primary text-sm font-medium"
				>Privacy Policy</a
			>
			<p class="text-sm">
				&copy; {currentYear} Shohin A. All rights reserved.
			</p>
		</div>
	</div>
</footer>
