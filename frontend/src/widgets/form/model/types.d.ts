export type Data = {
	name: string;
	email: string;
	phone: string | undefined;
	message: string;
};

export type Form = Omit<Data, keyof Custom>;

export interface Validation {
	nameMissing?: string;
	emailMissing?: string;
	messageMissing?: string;
	emailFormat?: string;
	phoneFormat?: string;
	phoneLimit?: string;
}
