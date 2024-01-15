import type { Data } from '$customTypes';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { isValidEmail } from '$source/lib/utils';

const API_ENDPOINT = 'https://api.web3forms.com';

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
	if (body.name.length < 10) {
		throw error(400, 'Name must be at least 10 characters');
	}
	if (body.email.length < 10) {
		throw error(400, 'Email must be at least 8 characters');
	}
	if (body.message.length < 50) {
		throw error(400, 'Message must be at least 50 characters');
	}
	if (!isValidEmail(body.email)) {
		throw error(400, 'Invalid email format');
	}
};

const properties = (body: Data) => {
	return {
		access_key: 'ba3c1bc3-5ea1-4468-b24f-d712fecd17f7',
		subject: `${body.name} sent a message from Personal Website Contact Form`,
		from_name: 'NEW MESSAGE',
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

	return json({
		ok: true,
		status: response.status,
		data: res
	});
};
