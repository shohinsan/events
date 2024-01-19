interface DateStyle {
	dateStyle?: 'short' | 'medium' | 'long' | 'full';
}

class Event {
	date: Date;
	description: string;

	constructor(date: Date, description: string) {
		this.date = date;
		this.description = description;
	}

	getDate(options?: DateStyle): string {
		const defaultOptions: DateStyle = { dateStyle: 'long' };
		const mergedOptions = { ...defaultOptions, ...options };
		return new Intl.DateTimeFormat('en-US', mergedOptions).format(this.date);
	}

	getDescription(): string {
		return this.description;
	}
}

function toRecentDates(a: Event, b: Event): number {
	return b.date.getTime() - a.date.getTime();
}

const createEvents = [
	new Event(new Date('1997-02-08'), 'Born and raised in Dushanbe, Tajikistan'),
	new Event(new Date('2015-07-15'), 'Graduated from high school'),
	new Event(new Date('04-01-2017'), 'Moved to the United States due to migration'),
	new Event(new Date('08-01-2018'), 'Enrolled at De Anza Community College'),
	new Event(new Date('08-19-2021'), 'Enrolled and transferred to San Jose State University'),
	new Event(new Date('08-19-2022'), 'Completed an internship at CratusTech'),
	new Event(
		new Date('12-15-2023'),
		'Submitted a paper about DIY Home Security system to SusTech 2024 IEEE Conference on Technologies for Sustainability '
	),
	new Event(
		new Date('12-18-2023'),
		'Graduated from San Jose State University with a Bachelor of Science in Software Engineering'
	)
];

createEvents.sort(toRecentDates);

const events: { date: string; description: string }[] = createEvents.map((event) => ({
	date: event.getDate(),
	description: event.getDescription()
}));

export default events;
