import type { Bot } from '$telegramTypes';
import { menuButton, sendMessage, myDescription, myCommands } from '$setup';
import { APP_TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '$env/static/private';
import { site } from '$seeds';

const newTelegramBotApp = (botToken: string): Bot => {
	const bot: Bot = {
		...menuButton(botToken),
		...sendMessage(botToken),
		...myDescription(botToken),
		...myCommands(botToken)
	};

	return bot;
};

const telegramBotAppMiddleware = async () => {
	const telegramBot = newTelegramBotApp(APP_TELEGRAM_BOT_TOKEN);
	await telegramBot.setChatMenuButton?.(TELEGRAM_CHAT_ID, {
		type: 'web_app',
		text: 'Open',
		web_app: {
			url: site.createSite.url.href
		}
	});
	await telegramBot.setMyName?.('InsidiousBot', 'en');
	await telegramBot.setMyDescription?.(
		'Shohin Portfolio Mini App. Powered by SvelteKit and Cloudflare',
		'en'
	);
	await telegramBot.setMyShortDescription?.('Portfolio Mini App', 'en');
};

export default telegramBotAppMiddleware;
