import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

import telegramBotAppMiddleware from './lib/botApp';

const handleCommunication: Handle = async ({ event, resolve }) => {
	await telegramBotAppMiddleware();
	return await resolve(event);
};

const i18n: Handle = async ({ event, resolve }) => {
	const locale = 'en';
	event.locals.locale = locale;
	return resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('%lang%', locale);
		}
	});
};

export const handle: Handle = sequence(i18n, handleCommunication);
