import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const handleCommunication: Handle = async ({ event, resolve }) => {
	return await resolve(event);
};

const i18n: Handle = async ({ event, resolve }) => {
	const locale = 'en';
	return resolve(event, {
		transformPageChunk: ({ html }) => {
			return transform(html, locale);
		}
	});
};

export const handle: Handle = sequence(i18n, handleCommunication);

function transform(html: string, locale: string): string {
	return html.replace('%lang%', locale);
}
