<script>
	let id = crypto.randomUUID();
</script>

<div
	class="pointer-events-none overflow-hidden right-[calc(max(0,50%-38rem)+40rem)] min-w-[32rem] overflow-visible"
>
	<svg class="absolute left-[max(0px,calc(0%-18.125rem))] top-0 h-full w-1.5" aria-hidden="true">
		<defs>
			<pattern {id} width="6" height="8" patternUnits="userSpaceOnUse">
				<path
					d="M0 0H6M0 8H6"
					class="stroke-sky-900/10 dark:stroke-white/10 xl:stroke-white/10"
					fill="none"
				/>
			</pattern>
		</defs>
		<rect width="100%" height="100%" fill={`url(#${id})`} />
	</svg>
</div>
