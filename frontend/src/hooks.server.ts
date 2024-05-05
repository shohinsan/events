import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
// import { newTelegramBotApp } from '$lib/telegram';

const handleCommunication: Handle = async ({ event, resolve }) => {
	// await newTelegramBotApp();
	return await resolve(event);
};

const i18n: Handle = async ({ event, resolve }) => {
	const locale = 'en';

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('%lang%', locale);
		}
	});
};

export const handle: Handle = sequence(i18n, handleCommunication);
