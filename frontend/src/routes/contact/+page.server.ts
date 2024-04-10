import type { PageServerLoad, Actions } from './$types.js';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import v from '$lib/validation-schema';
import { FORM_TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '$env/static/private';
import type { Data } from '$customTypes';
import { newTelegramBotForm } from '$source/lib/telegram/index.js';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(v.contactSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(v.contactSchema));
		const country = event.request.headers.get('cf-ipcountry') as string | undefined;

		await telegramBotMiddleware(
			{
				name: form.data.name,
				email: form.data.email,
				phone: form.data.phone,
				message: form.data.message
			},
			country
		);

		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		return {
			form
		};
	}
};

const telegramBotMiddleware = async (
	{ name, email, phone, message }: Data,
	country: string | undefined
) => {
	const telegramBot = newTelegramBotForm(FORM_TELEGRAM_BOT_TOKEN);

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
