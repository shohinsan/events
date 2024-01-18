import { fail } from '@sveltejs/kit';
import { newTelegramBot, typed } from '$lib';
import {
	EMAIL_SERVICE_API,
	ACCESS_KEY,
	SUBJECT,
	FROM_NAME,
	TELEGRAM_BOT_TOKEN,
	TELEGRAM_CHAT_ID
} from '$env/static/private';
import type { Data, Form } from '$customTypes';
import type { ActionData } from '../$types';

const API_ENDPOINT = EMAIL_SERVICE_API;

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const data: FormData = await request.formData();
		const { access_key, subject, from_name, name, email, message, phone } = contactForm(data);
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

		await telegramBotMiddleware({ name, email, phone, message });
		return await response.json();
	}
} satisfies ActionData;

const contactForm = (data: FormData): Data => ({
	access_key: ACCESS_KEY,
	subject: `${data.get('name')} ${SUBJECT}`,
	from_name: FROM_NAME,
	name: data.get('name') as string,
	email: data.get('email') as string,
	message: data.get('message') as string,
	phone: data.get('phone') ? `+${data.get('phone')}` : undefined
});

const telegramBotMiddleware = async ({ name, email, phone, message }: Form) => {
	const telegramBot = newTelegramBot(TELEGRAM_BOT_TOKEN);

	const textBuilder = `
	New Contact Form Submission
	
	Name: \n\t${name}\n
	Email: \n\t${email}\n
	Phone: \n\t${phone}\n
	Message: \n\t${message}
	`;

	await telegramBot.sendMessage(TELEGRAM_CHAT_ID, textBuilder);
};
