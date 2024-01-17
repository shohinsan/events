// See https://kit.svelte.dev/docs/types#app

import type { ComponentType } from "svelte"

// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			code?: string
			errorId?: string
		}
		interface Locals {
			user: Partial<Data> | null
			locale?: string
		}

		// interface PageData {}
		// interface Platform {}
	}

	declare interface Document {
		startViewTransition(callback: () => void): void
	}
}

interface Data {
	access_key?: string
	subject?: string
	from_name?: string
	name?: string
	email?: string
	message?: string
}

interface NavItem {
	name?: string;
	href?: string;
	icon?: ComponentType;
}

interface LinkItem {
	name?: string;
	href?: string;
	icon?: ComponentType;
}

interface ProjectItem {
	icon?: any;
	name?: string;
	description?: string;
	tags?: string[];
	href?: string;
	host?: string;
	state?: string;
}

interface EventItem {
    date?: string | number
	description?: string;
}

interface Validation {
	nameMissing?: string;
	emailMissing?: string;
	messageMissing?: string;
	nameLimit?: string;
	emailLimit?: string;
	messageLimit?: string;
	emailFormat?: string;
}


export { Data,  NavItem, LinkItem, ProjectItem, EventItem, Validation, Window, Document };