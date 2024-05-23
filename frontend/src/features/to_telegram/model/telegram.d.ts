type Response = {
	ok: boolean
	body: Record<string, string | number | boolean>
	status: number
}

// ----------------------------

interface BotCommand {
	command: string
	description: string
}

interface BotCommandScope {
	type: string
	chat_id?: number
	user_id?: number
}

export type MenuButtonWebApp = {
	type: string
	text: string
	web_app: {
		url: string
	}
}

export type Bot = {
	botToken: string
	sendMessage?: (chatID: string, message: string, parseMode?: string) => Promise<Response>
	setChatMenuButton?: (chatID: string, menu_button: MenuButtonWebApp) => Promise<Response>
	setMyName?: (name: string, language_code: string) => Promise<Response>
	setMyDescription?: (description: string, language_code: string) => Promise<Response>
	setMyShortDescription?: (short_description: string, language_code: string) => Promise<Response>
	setMyImage?: (photo: string, language_code?: string) => Promise<Response>
	setMyCommands?: (
		commands: BotCommand[],
		scope: BotCommandScope,
		language_code: string
	) => Promise<Response>
}