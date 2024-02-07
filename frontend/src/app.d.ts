// See https://kit.svelte.dev/docs/types#app

import type { ComponentType } from 'svelte';

// for information about these interfaces
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

		declare interface Window {
			'ga-disable-G-XMWD9Z9L3P': boolean;
			fbq: (...args: unknown[]) => void;
			gtag: (...args: unknown[]) => void;
		}
	}

	declare interface Document {
		startViewTransition(callback: () => void): void;
	}
}



type Data = {
	name: string;
	email: string;
	phone?: number | undefined;
	message: string;
};

type Form = Omit<Data, keyof Custom>;

interface Validation {
	nameMissing?: string;
	emailMissing?: string;
	messageMissing?: string;
	emailFormat?: string;
	phoneFormat?: string;
	phoneLimit?: string;
}

export { Data, Validation, Form, Window, Document };
