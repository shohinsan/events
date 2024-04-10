import { FORM_TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '$env/static/private';
import type { Data } from '$customTypes';
import { newTelegramBotForm } from '.';

// Define the telegramBotMiddleware function
export const telegramBotMiddleware = async (
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
