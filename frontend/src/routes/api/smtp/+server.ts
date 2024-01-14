import type { Data } from '$customTypes';
import { error, json } from '@sveltejs/kit';
import { EMAIL_SERVICE_API } from '$env/static/private'


const API_ENDPOINT = process.env.EMAIL_SERVICE_API;

export async function POST({ request }) {
	const body: Data = await request.json();

	if (!body.name) {
		throw error(400, 'Name is required');
	}
	if (!body.email) {
		throw error(400, 'Email is required');
	}
	if (!body.message) {
		throw error(400, 'Message is required');
	}

	const response = await fetch(`${API_ENDPOINT}/submit`, { 
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify(body)
	});

	if (response.ok) {
		return json({ ok: true });
	}
}
