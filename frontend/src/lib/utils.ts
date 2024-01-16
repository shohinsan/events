type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

export const isValidEmail = (email: string): boolean =>
	/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !/\.(com|edu|org|io)$/i.test(email.split('@')[1]);

export function isValidPassword(password: string) {
	const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
	return passwordRegex.test(password);
}
