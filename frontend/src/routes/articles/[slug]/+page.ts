/** @type {import('./$types').PageServerLoad} */
export async function load({ params: { slug }, fetch }) {
	const number = slug.split('-').pop();
	const res = await fetch(`/api/github/${number}`);
	const discussion = await res.json();

	return {
		discussion
	};
}
