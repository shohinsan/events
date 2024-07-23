import * as z from 'zod';

const nameRule = z.string().min(6, 'Name needs to be at least 6 characters');

const phoneRule = z
	.string()
	.min(10)
	.max(10)
	.regex(/^\d{10}$/, 'Phone number must be 10 digits without spaces or dashes')
	.optional();

const disallowedDomains = [
	'aol.com',
	'searchindex.site',
];

const emailRule = z
	.string()
	.email('Invalid email')
	.regex(
		/^[a-zA-Z0-9._-]+@(?:[a-zA-Z0-9-]+\.)+(com|edu|org|io)$/,
		'Email can only contain letters, numbers, underscores, periods, and hyphens'
	)
	.refine((email) => {
		const domain = email.split('@')[1];
		const disallowedDomain = disallowedDomains.find(d => d === domain);
		return !disallowedDomain;
	}, (email) => {
		const domain = email.split('@')[1];
		return { message: `Domain ${domain} is not allowed` };
	});

const messageRule = z.string();

const r = {
	nameRule,
	phoneRule,
	emailRule,
	messageRule
};

export default r;
