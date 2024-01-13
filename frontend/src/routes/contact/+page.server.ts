import { fail, type Actions, redirect } from '@sveltejs/kit';

interface Validation {
	nameMissing?: string;
	emailMissing?: string;
	messageMissing?: string;
}

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const message = data.get('message') as string;


		// Validation
		if (!name || !email || message) {
			const errors: Validation = {};
			if (!name) {
				errors.nameMissing = 'Name is required';
			}
			if (!email) {
				errors.emailMissing = 'Email is required';
			}
			if (!message) {
				errors.messageMissing = 'Message is required';
			}
			return fail(400, {
				required: !name || !email || !message,
				errors: errors
			});
		}



		// API Call
		const res = await fetch(`/contact`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify({ name, email, message })
		});

		if (res.ok) {
			return redirect(303, '/email_sent');
		}

		return fail(400, { msg: 'Something went wrong' });
	}
} satisfies Actions;
