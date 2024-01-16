import { fail } from '@sveltejs/kit';
import { utils } from '$lib';
import { EMAIL_SERVICE_API, ACCESS_KEY, SUBJECT, FROM_NAME } from '$env/static/private';
import type { Validation } from '$customTypes';

const API_ENDPOINT = EMAIL_SERVICE_API;

export const actions = {
	default: async ({ request }) => {
		const startTime = performance.now();

		const data = await request.formData();
		const { access_key, subject, from_name, name, email, message } = props(data);

		const validate = typedProps({ name, email, message });

		if (Object.keys(validate).length > 0) {
			return fail(400, {
				required: !name || !email || !message,
				errors: validate
			});
		}

		const response = await fetch(`${API_ENDPOINT}/submit`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify({ access_key, subject, from_name, name, email, message })
		});

		const endTime = performance.now();
		const requestTime = endTime - startTime;

		if (requestTime < 10) {
			const errors: Validation = {
				messageLimit: 'Message limit has been exceeded to over 10ms'
			};
			return fail(400, { errors });
		}

		const responseData = await response.json();
		return responseData;
	}
};

// Helpers

const typedProps = ({
	name,
	email,
	message
}: {
	name: string;
	email: string;
	message: string;
}): Validation => {
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

	if (name.length < 8) {
		errors.nameLimit = 'Name must be at least 8 characters';
	}

	if (email.length < 15) {
		errors.emailLimit = 'Email must be at least 15 characters';
	}

	if (message.length < 50) {
		errors.messageLimit = 'Message must be at least 50 characters';
	}

	if (utils.isValidEmail(email)) {
		errors.emailFormat =
			'Supported domains as of today are: .com, .edu, .org, .io. Please use a valid email address.';
	}

	return errors;
};

const props = (data: FormData) => {
	const access_key = `${ACCESS_KEY}` as string;
	const subject = `${data.get('name')} | ${SUBJECT}` as string;
	const from_name = `${FROM_NAME}` as string;
	const name = data.get('name') as string;
	const email = data.get('email') as string;
	const message = data.get('message') as string;

	return {
		access_key,
		subject,
		from_name,
		name,
		email,
		message
	};
};
