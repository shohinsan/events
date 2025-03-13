<script lang="ts">
	import '@/styles/app.css';
	import NProgress from 'nprogress';
	import { onNavigate, afterNavigate, beforeNavigate } from '$app/navigation';
	import Metadata from '@/lib/components/Metadata.svelte';
	import Footer from '@/lib/components/Footer.svelte';
	import Navbar from '@/lib/components/Navbar.svelte';
	let { children } = $props();

	NProgress.configure({ showSpinner: false });

	afterNavigate(() => {
		NProgress.done();
	});

	beforeNavigate(() => {
		NProgress.start();
	});

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Metadata />

<div class="font-sfo flex overflow-y-scroll">
	<div class="fixed inset-0 flex justify-center overflow-y-scroll sm:px-8">
		<div class="flex w-full max-w-7xl lg:px-8">
			<div class="ring-muted h-max w-full ring-1">
				<Navbar />
				<div class="relative flex w-full flex-col">
					<main class="mx-10 flex-auto md:mx-20">
						{@render children()}
						<Footer />
					</main>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <div class={cn(' flex overflow-y-scroll font-sfo ')}>
	<div class="fixed inset-0 flex justify-center overflow-y-scroll sm:px-8">
		<div class="flex w-full max-w-7xl lg:px-8">
			<div class="h-max w-full ring-1 ring-muted">
				<Navbar />
				<div class="relative flex w-full flex-col">
					<main class="mx-10 flex-auto md:mx-20">
						<slot />
						<Footer />
					</main>
				</div>
			</div>
		</div>
	</div>
</div> -->
