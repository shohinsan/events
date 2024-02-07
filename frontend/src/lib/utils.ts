export type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

const utils = {
	isValidEmail: (email: string): boolean =>
		/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !/\.(com|edu|org|io)$/i.test(email.split('@')[1]),

	isCharacterLimit: (phone: number): boolean => phone.toString().length !== 10,

	scrollToTop: (): void => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}
};

export default utils;
