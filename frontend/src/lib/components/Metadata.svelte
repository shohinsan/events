<script lang="ts">
	let { title = "Shohin's Portfolio" } = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta
		name="description"
		content="Welcome to Shohin's personal portfolio. Explore my projects, skills, and experience in software development."
	/>
	<meta
		name="keywords"
		content="Shohin, Portfolio, Software Developer, Golang, React, Functional Programming, Microservices"
	/>
	<meta name="author" content="Shohin" />
	<meta name="twitter:card" content="https://shohin.pages.dev/portrait.png" />
	<meta name="twitter:title" content={title} />
	<meta
		name="twitter:description"
		content="Discover Shohin's latest projects and insights on software development."
	/>
	<meta name="twitter:image" content="https://shohin.pages.dev/portrait.png" />
	<meta name="twitter:image:alt" content="Shohin's Portfolio" />
	<meta name="twitter:creator" content="Shohin" />
	<meta property="og:title" content={title} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://Shohin.dev" />
	<meta property="og:image" content="https://shohin.pages.dev/portrait.png" />
	<meta property="og:image:alt" content="Shohin's Portfolio" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:description"
		content="Explore Shohin's portfolio, projects, and expertise in software engineering."
	/>
	<meta property="og:site_name" content="Shohin's Portfolio" />
	<meta property="og:locale" content="en_US" />
	<link rel="shortcut icon" href="/favicon-16x16.png" />
</svelte:head>
