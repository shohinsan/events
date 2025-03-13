import type { Actions } from './$types.js'
import { FORM_TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '$env/static/private'

import type { Data } from '@/lib/utils/types.js'
import newTelegramBot from '@/lib/utils/tg-send-message.js'
import { fail } from '@sveltejs/kit'
import v from '@/lib/utils/zod-validation.js'

export const actions: Actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		const form = await v.contactSchema.safeParseAsync(formData);

		if (!form.success) {
			const errors = form.error.errors.map(err => ({
				field: err.path[0],
				message: err.message
			}));

			return fail(400, { errors });
		}

		const { name, email, phone, message } = form.data;
		const country = event.request.headers.get('cf-ipcountry') as string | undefined;

		await telegramBotMiddleware({ name, email, phone, message }, country);

		return { success: true }
	}
};

const telegramBotMiddleware = async (
	{ name, email, phone, message }: Data,
	country: string | undefined
) => {
	const telegramBot = newTelegramBot(FORM_TELEGRAM_BOT_TOKEN)

	const textBuilder = `*New form submission from ${name}*

	| *Contact details*
	|-------------------------
	   *Email*   -  ${email}
	   *Phone*  -  ${phone}
	   *Country*  -  ${country || 'Unknown'}

  | *Message*
	 |------------------------
	   ${message}`

	await telegramBot.sendMessage?.(TELEGRAM_CHAT_ID, textBuilder, 'Markdown')
}