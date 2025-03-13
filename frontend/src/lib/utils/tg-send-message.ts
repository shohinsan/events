import type { Bot } from "@/telegram"

const newTelegramBot = (botToken: string): Bot => {
	const baseUrl = `https://api.telegram.org/bot${botToken}`

	const sendMessage: Bot['sendMessage'] = async (chatID, message, parseMode) => {
		const url = `${baseUrl}/sendMessage`
		const body = {
			chat_id: chatID,
			text: message,
			parse_mode: parseMode
		}

		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})

		const responseBody = res.ok ? await res.json() : { error: await res.text() }

		return {
			ok: res.ok,
			body: responseBody,
			status: res.status
		}
	}

	return {
		botToken,
		sendMessage
	}
}

export default newTelegramBot
