import slugify from 'slugify';
import middleware from '../api/github/[number]/middleware';
import type { PageServerLoad } from '../$types';

const query = `{
	repository(name: "LifeEvents", owner: "shohinsan") {
	  discussions(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
		nodes {
		  title
		  number
		  createdAt
		}
	  }
	}
  }`;

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await middleware(query, {}, fetch);
	const {
		repository: {
			discussions: { nodes }
		}
	} = res;
	nodes.map((node: { slug: any; title: any; createdAt: any }) => {
		node.slug = slugify(node.title);
	});

	return {
		nodes
	};
};
