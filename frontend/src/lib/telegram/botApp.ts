import type { Bot } from '$telegramTypes';
import { menuButton, sendMessage, myDescription, myCommands } from '$source/lib/telegram/setup';
import { APP_TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '$env/static/private';
import { site } from '$seeds';

const app = (botToken: string): Bot => {
	const bot: Bot = {
		...menuButton(botToken),
		...sendMessage(botToken),
		...myDescription(botToken),
		...myCommands(botToken)
	};

	return bot;
};

const newTelegramBotApp = async () => {
	const telegramBot = app(APP_TELEGRAM_BOT_TOKEN);
	await telegramBot.setChatMenuButton?.(TELEGRAM_CHAT_ID, {
		type: 'web_app',
		text: 'Open',
		web_app: {
			url: site.createSite.url.href
		}
	});
	await telegramBot.setMyName?.('InsidiousBot', 'en');
	await telegramBot.setMyDescription?.(
		'Shohin Mini App. Powered by SvelteKit and Cloudflare',
		'en'
	);
	await telegramBot.setMyShortDescription?.(
		'Shohin Mini App. Powered by SvelteKit and Cloudflare',
		'en'
	);
	await telegramBot.setMyImage?.(site.createSite.ogImage);

	await telegramBot.setMyCommands?.(
		[
			{ command: 'start', description: 'Start using the bot' },
			{ command: 'help', description: 'Get help' }
		],
		{ type: 'default', chat_id: parseInt(TELEGRAM_CHAT_ID) },
		'en'
	);
};

export default newTelegramBotApp;
