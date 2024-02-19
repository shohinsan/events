import { fail } from '@sveltejs/kit';
import { newTelegramBot, typed } from '$lib';
import {
	TELEGRAM_BOT_TOKEN,
	TELEGRAM_CHAT_ID
} from '$env/static/private';
import type { Data } from '$customTypes';
import type { ActionData } from '../$types';

export const actions = {
	default: async ({ request }: { request: Request }) => {
		const data: FormData = await request.formData();
		const { name, email, message, phone } = contactForm(data);

		const country = request.headers.get('cf-ipcountry') as string | undefined;
		const validate = typed({ name, email, message, phone });

		if (Object.keys(validate).length > 0) {
			return fail(400, {
				required: !name || !email || !message || !phone,
				errors: validate
			});
		}

		await telegramBotMiddleware(
			{
				name,
				email,
				phone,
				message
			},
			country
		);

	}
} satisfies ActionData;

const contactForm = (data: FormData): Data => ({
	name: data.get('name') as string,
	email: data.get('email') as string,
	message: data.get('message') as string,
	phone: data.get('phone') ? Number(data.get('phone')) : undefined,
});

const telegramBotMiddleware = async (
	{ name, email, phone, message }: Data,
	country: string | undefined
) => {
	const telegramBot = newTelegramBot(TELEGRAM_BOT_TOKEN);

    	const textBuilder = `*New form submission from ${name}*
	
	| *Contact details*
	|-------------------------
	   *Email*   -  ${email}      
	   *Phone*  -  ${phone} 
	   *Country*  -  ${country}
	
        | *Message*
	|-------------------------
	   ${message}`;

	await telegramBot.sendMessage(TELEGRAM_CHAT_ID, textBuilder, 'Markdown');
};
