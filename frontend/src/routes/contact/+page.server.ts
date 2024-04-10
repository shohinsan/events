import type { PageServerLoad, Actions } from './$types.js';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import v from '$lib/validation-schema';

import { telegramBotMiddleware } from '$lib/telegram/botFormat';

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
