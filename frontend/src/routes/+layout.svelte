<script>
	import '@/app/styles/tailwind.pcss'
	import '@/app/styles/font.css'
	import '@/app/styles/app.css'
	import { afterNavigate, beforeNavigate } from '$app/navigation'
	import { onMount } from 'svelte'
	import { onNavigate } from '$app/navigation'
	import { Toaster } from '@/shared/ui/sonner'
	import { ModeWatcher, setMode } from 'mode-watcher'
	import NProgress from 'nprogress'
	import 'nprogress/nprogress.css'
	import { cn } from '@/shared/lib/utils'
	import { Navbar, Footer } from '@/widgets'
	import { Metadata } from '@/app/index'

	NProgress.configure({ showSpinner: false })

	afterNavigate(() => {
		NProgress.done()
	})

	beforeNavigate(() => {
		NProgress.start()
	})

	onNavigate((navigation) => {
		if (!document.startViewTransition) return
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})

	onMount(() => {
		setMode('dark')
	})
</script>

<ModeWatcher />
<Toaster />
<Metadata />

<div class={cn(' flex overflow-y-scroll font-sfo ')}>
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
