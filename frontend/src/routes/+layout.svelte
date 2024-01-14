<script>
	import { onMount } from 'svelte';
	import Desktop from '$components/Navbar/Desktop.svelte';
	import Mobile from '$components/Navbar/Mobile.svelte';
	import Footer from '$components/Footer.svelte';
	import Metadata from '$components/Metadata.svelte';
	import '$styles/app.css';

	import { onNavigate } from '$app/navigation';

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
						newSW.postMessage({ type: 'SKIP_WAITING' })
						window.location.reload();
					}
				}
			});
		});
	}

	onMount(() => {
		detectSWUpdate();
	});

</script>

<Metadata />

<div class="flex bg-zinc-50 overflow-y-scroll">
	<div class="fixed inset-0 flex bg-black justify-center sm:px-8 overflow-y-scroll">
		<div class="flex w-full max-w-7xl lg:px-8">
			<div class="w-full h-max ring-1 ring-zinc-100 bg-zinc-900 ring-zinc-300/20">
				<Desktop />
				<div class="relative flex w-full flex-col">
					<main class="flex-auto mx-10 md:mx-20">
						<slot />
						<Footer />
						<Mobile />
					</main>
				</div>
			</div>
		</div>
	</div>
</div>
