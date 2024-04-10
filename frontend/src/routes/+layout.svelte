<script>
	import '$styles/tailwind.pcss';
	import '$styles/font.css';
	import '$styles/app.css';
	
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';
	import { Navbar, Footer, Metadata } from '$components/system';
	import { Toaster } from '$components/ui/sonner';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import { cn } from '$source/lib/utils'; // Importing cn function

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	async function detectSWUpdate() {
		const registration = await navigator.serviceWorker.ready;

		registration.addEventListener('updatefound', () => {
			const newSW = registration.installing;
			newSW?.addEventListener('statechange', () => {
				if (newSW.state === 'installed') {
					if (confirm('New version available! Refresh to update?')) {
						newSW.postMessage({ type: 'SKIP_WAITING' });
						window.location.reload();
					}
				}
			});
		});
	}

	onMount(() => {
		setMode('dark');
		detectSWUpdate();
	});
</script>

<ModeWatcher />
<Toaster />
<Metadata />

<div class={cn(' flex overflow-y-scroll font-sfo')}>
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
</div>
