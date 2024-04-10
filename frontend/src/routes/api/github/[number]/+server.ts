import { json } from '@sveltejs/kit';
import middleware from './middleware';

const query = `query GetDiscussion($number: Int!) {
	repository(name: "LifeEvents", owner: "shohinsan") {
	  discussion(number: $number) {
		bodyHTML
		title
		createdAt
	  }
	}
  }`;

export async function GET({ params: { number }, fetch, setHeaders }) {
	const variables = {
		number: parseInt(number)
	};
	const {
		repository: { discussion }
	} = await middleware(query, variables, fetch);

	setHeaders({
		'cache-control': 'max-age=600'
	});

	return json(discussion);
}
