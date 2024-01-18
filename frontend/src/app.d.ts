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
	}

	declare interface Document {
		startViewTransition(callback: () => void): void;
	}
}

type Custom = {
	access_key: string;
	subject: string;
	from_name: string;
};

type Data = Custom & {
	name: string;
	email: string;
	phone?: string | undefined;
	message: string;
};

type Form = Omit<Data, keyof Custom>;

interface Validation {
	nameMissing?: string;
	emailMissing?: string;
	messageMissing?: string;
	nameLimit?: string;
	emailLimit?: string;
	messageLimit?: string;
	requestTotal?: string;
	emailFormat?: string;
	phoneFormat?: string;
}

export { Data, Validation, Form, Window, Document };
