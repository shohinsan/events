export type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

const utils = {
	formatDate: (date: string, dateStyle: DateStyle = 'medium', locales = 'en') => {
		const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
		return formatter.format(new Date(date));
	},

	isValidEmail: (email: string): boolean =>
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !/\.(com|edu|org|io)$/i.test(email.split('@')[1]),

	isValidPassword: (password: string) => {
		const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
		return passwordRegex.test(password);
	}
};

export default utils;
