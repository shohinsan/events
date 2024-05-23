declare global {
	namespace App {
		interface Error {
			code?: string;
			errorId?: string;
		}

		interface Locals {
			locale?: string;
		}

		// interface PageData {}
		// interface Platform {}
	}

	declare interface Window {
		'ga-disable-G-XMWD9Z9L3P': boolean;
		fbq: (...args: unknown[]) => void;
		gtag: (...args: unknown[]) => void;
		clarity: (...args: unknown[]) => void;
	}

	declare interface Document {
		startViewTransition(callback: () => void): void;
	}
}

export { Window, Document };
