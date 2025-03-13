<script>
	let {
		TERMS_PRIVACY_WEBSITE = 'shohin.pages.dev',
		TERMS_PRIVACY_EFFECTIVE_DATE = 'January 1, 2023',
		TERMS_PRIVACY_CONTACT_EMAIL = 'abd.shohin@gmail.com'
	} = $props();
</script>

<svelte:head>
	<title>Privacy Policy - User Privacy</title>
</svelte:head>

<main class="my-10">
	<h1 class="mb-4 text-2xl font-bold">Privacy Policy for {TERMS_PRIVACY_WEBSITE}</h1>

	<h2 class="mt-6 text-xl font-semibold">Effective Date: {TERMS_PRIVACY_EFFECTIVE_DATE}</h2>

	<p class="mt-4">
		This Privacy Policy describes how I handle data collected through form submissions on my
		website.
	</p>

	<h2 class="mt-6 text-xl font-semibold">Information I Collect</h2>
	<p class="mt-2">I collect the following information:</p>
	<ul class="mt-2 list-inside list-disc">
		<li>
			Form Submissions: When you submit a form, I collect the information you provide, such as your
			name, email, and message.
		</li>
	</ul>

	<h2 class="mt-6 text-xl font-semibold">How I Use This Information</h2>
	<p class="mt-2">I use the collected data to:</p>
	<ul class="mt-2 list-inside list-disc">
		<li>Respond to your inquiries submitted through forms.</li>
	</ul>

	<h2 class="mt-6 text-xl font-semibold">Data Sharing</h2>
	<p class="mt-2">
		I do not sell, rent, or share your personal data with third parties, except as required by law.
	</p>

	<h2 class="mt-6 text-xl font-semibold">Your Rights</h2>
	<p class="mt-2">
		If you would like your submitted form data to be deleted, you can contact me at
		<a href="mailto:{TERMS_PRIVACY_CONTACT_EMAIL}" class="text-blue-600 hover:underline"
			>{TERMS_PRIVACY_CONTACT_EMAIL}</a
		>.
	</p>

	<h2 class="mt-6 text-xl font-semibold">Changes to This Policy</h2>
	<p class="mt-2">
		I may update this Privacy Policy from time to time. Any changes will be posted on this page.
	</p>

	<h2 class="mt-6 text-xl font-semibold">Contact</h2>
	<p class="mt-2">
		If you have any questions, please email me at
		<a href="mailto:{TERMS_PRIVACY_CONTACT_EMAIL}" class="text-blue-600 hover:underline"
			>{TERMS_PRIVACY_CONTACT_EMAIL}</a
		>.
	</p>
</main>
