import type { Data } from '$customTypes';
import { error, json } from '@sveltejs/kit';
import { EMAIL_SERVICE_API } from '$env/static/private';
import { ACCESS_KEY, SUBJECT, FROM_NAME } from '$env/static/private';
import type { RequestHandler } from './$types';

const API_ENDPOINT = EMAIL_SERVICE_API || 'https://api.web3forms.com';

const exceptions = (body: Data) => {
	if (!body.name) {
		throw error(400, 'Name is required');
	}
	if (!body.email) {
		throw error(400, 'Email is required');
	}
	if (!body.message) {
		throw error(400, 'Message is required');
	}
};

const properties = (body: Data) => {
	return {
		access_key: ACCESS_KEY, 
		subject: SUBJECT, 
		from_name: FROM_NAME,
		name: body.name,
		email: body.email,
		message: body.message
	};
};

export const POST: RequestHandler = async ({ request }) => {
	const body: Data = await request.json();
	exceptions(body);
	const props = properties(body);

	const response = await fetch(`${API_ENDPOINT}/submit`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(props)
	});

	const res = await response.text();
	console.log('res: ', res);

	return json({
		ok: true,
		status: response.status,
		data: res
	});
} 

// try {
// 	const responseText = await response.text();
// 	console.error('responseText: ', responseText);

// 	if (response.ok) {
// 		console.log('responseText: ', responseText);
// 	} else {
// 		return new Response('Internal Server Error', { status: 500 });
// 	}
// } catch (err) {
// 	return error(500, 'Internal Server Error');
// }
