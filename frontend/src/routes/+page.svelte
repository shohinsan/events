<script>
	import me from '$source/me.png';
	import { linkConfig } from '$lib/link';
	import { page } from '$app/stores';
	import Download from '$assets/Download.svelte';
	import resume from '$source/resume.pdf';

	const download = async () => {
		try {
			const response = await fetch(resume);
			const blob = await response.blob();

			const a = document.createElement('a');
			document.body.appendChild(a);
			const url = window.URL.createObjectURL(blob);
			a.href = url;
			a.download = 'Shohin_Abdulkhamidov_Resume.pdf';
			a.click();
			setTimeout(() => {
				window.URL.revokeObjectURL(url);
				document.body.removeChild(a);
			}, 0);
		} catch (error) {
			console.error('Error fetching PDF or initiating download:', error);
		}
	};
	
</script>

<div class="mt-16 sm:mt-32">
	<div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
		<div class="lg:pl-20">
			<div class="max-w-xs px-2.5 lg:max-w-none">
				<img
					src={me}
					alt="Shohin's Pictures"
					class="aspect-square rotate-3 rounded-2xl object-cover bg-zinc-800"
				/>
			</div>
		</div>
		<div class="lg:order-first lg:row-span-2">
			<h1 class="text-4xl font-bold tracking-tight text-zinc-100  sm:text-5xl">
				I’m Shohin Abdulkhamidov, an inspiring Software Engineer based in California.
			</h1>
			<div class="mt-6 space-y-7 text-base text-zinc-400">
				<p>
					A
				</p>
				<p>
					B
				</p>
				<p>
					C
				</p>
				<p>
					D
				</p>
			</div>
		</div>
		<div class="lg:pl-20">
			<button
				on:click={download}
				class="group bg-zinc-700 my-8 w-full rounded-md px-3 py-2 items-center text-center justify-center flex hover:bg-zinc-400"
			>
				<span class="mr-5">Download CV</span>
				<Download />
			</button>

			{#each linkConfig.professionalLinks as { name, href, icon }}
				<ul
					role="list"
					class="group flex items-center text-sm font-medium transition text-zinc-200 hover:text-teal-400"
				>
					{#if icon}
						<span class="flex-shrink-0">
							<svelte:component this={icon} />
						</span>
					{/if}
					<li
						aria-current={$page.url.pathname === href ? 'page' : undefined}
						class="inline-block py-2 px-4"
					>
						<a {href}>{name}</a>
					</li>
				</ul>
			{/each}

			<div class="mt-8 border-t pt-8 border-zinc-700/40" />

			{#each linkConfig.personalLinks as { name, href, icon }}
				<ul
					role="list"
					class="group flex items-center text-sm font-medium transition text-zinc-200 hover:text-teal-400"
				>
					{#if icon}
						<span class="flex-shrink-0">
							<svelte:component this={icon} />
						</span>
					{/if}
					<li
						aria-current={$page.url.pathname === href ? 'page' : undefined}
						class="inline-block py-2 px-4"
					>
						<a {href}>{name}</a>
					</li>
				</ul>
			{/each}

			<!--                 
                <li class="flex">
                        <a href="###" class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
                            <div class="h-6 w-6 flex-none fill-zinc-500 transition hover:bg-teal-500">
                                <Instagram />
                                <
                            </div>
                            <p class="ml-4"></p>    
                        </a>
    
                </li> -->

			<!-- <a href="#" icon={TwitterIcon}>
            Follow on Twitter
          </a>
          <a href="#" icon={InstagramIcon} className="mt-4">
            Follow on Instagram
          </a>
          <a href="#" icon={GitHubIcon} className="mt-4">
            Follow on GitHub
          </SocialLink>
          <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
            Follow on LinkedIn
          </SocialLink>
          <SocialLink
            href="mailto:spencer@planetaria.tech"
            icon={MailIcon}
            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
          >
            spencer@planetaria.tech
          </SocialLink> -->
		</div>
	</div>
</div>
