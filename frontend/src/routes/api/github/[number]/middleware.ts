import { GITHUB_TOKEN } from '$env/static/private';

const middleware = async (query: any, variables: any, fetch: any) => {
	const res = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `bearer ${GITHUB_TOKEN}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ query, variables })
	});
	const { data } = await res.json();
	return data;
};

export default middleware;