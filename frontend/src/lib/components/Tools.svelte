<script lang="ts">
	let { data } = $props();
</script>

<div id="toolsSection" class="flex flex-col justify-start w-full mt-6">
	<div class="text-faint text-xs font-extrabold uppercase">Tools</div>
	<div class="flex flex-wrap mt-4 gap-1.5">
		{#each data as tool}
			<div
				class="flex items-center justify-center py-1 px-1.5 text-tertiary font-medium text-xs space-x-[5px] bg-background-tertiary rounded-md border border-background-secondary"
			>
				{@html tool.icon}
				<div>{tool.text}</div>
			</div>
		{/each}
	</div>
</div>
