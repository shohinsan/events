export function time(): string {
	const currentDate = new Date();
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		month: 'long',
		day: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		hour12: true
	};
	return currentDate.toLocaleString('en-US', options);
}
