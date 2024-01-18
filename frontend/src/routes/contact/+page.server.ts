import { fail } from '@sveltejs/kit';
import { typed } from '$lib';
import { EMAIL_SERVICE_API, ACCESS_KEY, SUBJECT, FROM_NAME } from '$env/static/private';
import type { Data } from '$customTypes';

const API_ENDPOINT = EMAIL_SERVICE_API;

export const actions = {
	default: async ({ request }) => {
		const data: FormData = await request.formData();
		const { access_key, subject, from_name, name, email, message, phone } = all(data);
		const props = { access_key, subject, from_name, name, email, message, phone };
		const validate = typed({ name, email, message, phone });

		if (Object.keys(validate).length > 0) {
			return fail(400, {
				required: !name || !email || !message || !phone,
				errors: validate
			});
		}

		const response = await fetch(`${API_ENDPOINT}/submit`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(props)
		});

		return await response.json();
	}
};

const all = (data: FormData): Data => ({
	access_key: ACCESS_KEY,
	subject: `${data.get('name')}${SUBJECT}`,
	from_name: FROM_NAME,
	name: data.get('name') as string,
	email: data.get('email') as string,
	message: data.get('message') as string,
	phone: data.get('phone') ? `+${data.get('phone')}` : undefined
});
