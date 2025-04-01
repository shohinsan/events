<script lang="ts">
	let { data } = $props();
</script>

<!--
    Coastal UI Design Basics:
    Main padding: 4
    Smaller alert / etc padding: 2
    border color: #222222
    card bg color: #0a0a0a
    rounded: lg
-->

<div class="w-full flex flex-col">
	<div
		class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-5 mt-6 sm:mt-2"
	>
		<div class="flex flex-col sm:flex-row items-center w-full">
			<img
				alt="avatar of Jonathan"
				src={data.avatar}
				class="sm:h-16 grayscale sm:w-16 w-24 h-24 rounded-full shadow-lg shadow-background-secondary mb-2 sm:mb-0"
			/>
			<div class="flex flex-col items-center sm:items-start sm:ml-4 w-full">
				<div class="text-primary text-3xl">{data.name}</div>
				<div class="text-faint text-sm sm:-mt-[2px]">{data.occupation}</div>
			</div>
		</div>

		<!-- Social Links Container - Maintain 4/2 layout on all screen sizes -->
		<div class="flex flex-col space-y-4">
			<!-- First Row: 4 Links -->

			<div class="flex items-center space-x-5 sm:space-x-3">
				<button
					aria-label="X Social Media link"
					onclick={() => window.open(data.xSocialLink, '_blank')}
					class="cursor-pointer"
				>
					<svg
						class="h-11 w-11 p-1 sm:p-0 sm:h-5 sm:w-5 text-faint hover:text-secondary"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						><path
							fill="currentColor"
							d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9zm-24.8 373.8h39.1L151.1 88h-42z"
						/></svg
					>
				</button>
				<div class="h-5 sm:h-3.5 w-[1px] bg-faint/50"></div>

				<!-- Steam icon with better styling -->
				<button
					aria-label="Steam link"
					onclick={() => window.open(data.steamLink, '_blank')}
					class="cursor-pointer"
				>
					<svg
						class="size-9 sm:h-5 sm:w-5 text-faint hover:text-secondary rounded-full"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							d="M9.406 17.183c.431-1.025-.05-2.206-1.076-2.637l-1.762-.741c.331-.125.654-.182.982-.183 1.518 0 2.765 1.236 2.779 2.754.014 1.538-1.217 2.792-2.753 2.806-1.159.005-2.138-.684-2.571-1.665l1.763.741c1.027.432 2.207-.05 2.638-1.075zm-9.406-17.183v11.043l5.585 2.349c.596-.39 1.283-.599 2.046-.583l3.017-4.221c.048-2.541 2.122-4.588 4.674-4.588 2.583 0 4.678 2.094 4.678 4.677 0 2.581-2.098 4.703-4.732 4.675l-4.115 3.067-.009.004c-.012 1.962-1.593 3.558-3.561 3.577-1.777.015-3.234-1.249-3.56-2.895l-4.023-1.692v8.587h24v-24h-24zm15.322 11.857c-1.752 0-3.179-1.427-3.179-3.18 0-1.753 1.427-3.179 3.179-3.179 1.753 0 3.179 1.426 3.179 3.179s-1.425 3.18-3.179 3.18zm0-.779c1.325 0 2.401-1.077 2.401-2.401 0-1.323-1.076-2.401-2.401-2.401-1.324 0-2.401 1.078-2.401 2.401 0 1.324 1.078 2.401 2.401 2.401z"
						/></svg
					>
				</button>

				<div class="h-5 sm:h-3.5 w-[1px] bg-faint/50"></div>

				<!-- Telegram icon with better styling -->
				<button
					aria-label="Telegram link"
					onclick={() => window.open(data.telegramLink, '_blank')}
					class="cursor-pointer"
				>
					<svg class="h-11 w-11 sm:h-6 sm:w-6 text-faint hover:text-secondary" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M11.99 2C6.472 2 2 6.473 2 12c0 5.528 4.472 10 9.99 10c5.527 0 10.01-4.472 10.01-10C22 6.473 17.517 2 11.99 2zm4.595 7.428l-1.76 8.27c-.131.59-.483.736-.977.459l-2.705-1.991l-1.304 1.256c-.145.144-.266.266-.543.266l.193-2.744l4.994-4.506c.217-.194-.047-.301-.335-.107l-6.173 3.884l-2.661-.83c-.578-.184-.59-.578.12-.85l10.378-4c.485-.177.91.113.773.893z"
						/>
					</svg>
				</button>
			</div>

			<!-- Second Row: 3 Links -->
			<div class="flex items-center space-x-5 sm:space-x-3 justify-center">
				<button
					aria-label="GitHub link"
					onclick={() => window.open(data.githubLink, '_blank')}
					class="cursor-pointer"
				>
					<svg class="h-11 w-11 sm:h-6 sm:w-6 text-faint hover:text-secondary" viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.09.66-.21.66-.47v-1.64c-2.78.6-3.37-1.34-3.37-1.34c-.45-1.15-1.11-1.46-1.11-1.46c-.91-.62.07-.61.07-.61c1 .07 1.53 1.03 1.53 1.03c.89 1.52 2.34 1.08 2.91.83c.09-.65.35-1.08.64-1.33c-2.22-.25-4.56-1.11-4.56-4.94c0-1.09.39-1.98 1.03-2.68c-.1-.25-.45-1.27.1-2.65c0 0 .84-.27 2.75 1.02c.8-.22 1.66-.33 2.51-.33c.85 0 1.71.11 2.51.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.38.2 2.4.1 2.65c.64.7 1.03 1.59 1.03 2.68c0 3.84-2.34 4.69-4.56 4.94c.36.31.68.92.68 1.86v2.76c0 .27.16.58.67.47C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"
						/>
					</svg>
				</button>
				<div class="h-5 sm:h-3.5 w-[1px] bg-faint/50"></div>
				<button
					aria-label="LinkedIn Social Media link"
					onclick={() => window.open(data.linkedInSocialLink, '_blank')}
					class="cursor-pointer"
				>
					<svg
						class="h-11 w-11 sm:h-6 sm:w-6 text-faint hover:text-secondary"
						viewBox="0 0 1024 1024"
						><path
							fill="currentColor"
							d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M349.3 793.7H230.6V411.9h118.7zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8m503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2c-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7c120.2 0 142.3 79.1 142.3 181.9z"
						/></svg
					>
				</button>
			</div>
		</div>
	</div>

	<div id="aboutSection" class="flex flex-col justify-start w-full mt-16">
		<div class="text-faint text-xs font-extrabold uppercase">About</div>
		<div class="text-primary mt-3">{data.description}</div>
	</div>
</div>
