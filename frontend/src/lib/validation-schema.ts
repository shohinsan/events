import * as z from 'zod';
import r from './validation-rules';

const contactSchema = z.object({
	name: r.nameRule,
	email: r.emailRule,
	phone: r.phoneRule,
	message: r.messageRule
});

export type ContactSchema = typeof contactSchema;

const v = {
	contactSchema
};

export default v;
