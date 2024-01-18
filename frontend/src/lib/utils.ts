export type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

const utils = {
	isValidEmail: (email: string): boolean =>
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !/\.(com|edu|org|io)$/i.test(email.split('@')[1]),

	isValidPhone: (phone: string): boolean =>
		/^\d{2,3}-\d{2,3}-\d{4}$/.test(phone.replace(/\D/g, '')),

	scrollToTop: (): void => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}
};

export default utils;
