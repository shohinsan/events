import type { PageServerLoad } from './$types';
import { R2_PORTRAIT } from '$env/static/private';

export const load: PageServerLoad = () => {
	return {
		myimage: R2_PORTRAIT,
	};
};
