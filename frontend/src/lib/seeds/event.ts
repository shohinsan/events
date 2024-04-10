interface DateStyle {
	dateStyle?: 'short' | 'medium' | 'long' | 'full';
}

class Event {
	date: Date;
	title: string;
	description: string;

	constructor(date: Date, title: string, description: string) {
		this.date = date;
		this.title = title;
		this.description = description;
	}

	getDate(options?: DateStyle): string {
		const defaultOptions: DateStyle = { dateStyle: 'long' };
		const mergedOptions = { ...defaultOptions, ...options };
		return new Intl.DateTimeFormat('en-US', mergedOptions).format(this.date);
	}

	getTitle(): string {
		return this.title;
	}

	getDescription(): string {
		return this.description;
	}
}

function toRecentDates(a: Event, b: Event): number {
	return b.date.getTime() - a.date.getTime();
}

const createEvents = [
	new Event(new Date('1997-02-08'), 'Birth Date', 'I was born and raised in Dushanbe, Tajikistan.'),
	new Event(
		new Date('2015-07-15'),
		'High School Graduation',
		'I successfully graduated from high school, marking the completion of my secondary education.'
	),
	new Event(
		new Date('04-01-2017'),
		'Migration to the US',
		'I made a life-changing decision to move to the United States due to migration, seeking new opportunities.'
	),
	new Event(
		new Date('08-01-2018'),
		'Enrolled in De Anza College',
		'I enrolled at De Anza Community College, taking my first steps towards higher education in the US.'
	),
	new Event(
		new Date('08-19-2021'),
		'Transferred to SJSU',
		'I successfully transferred to San Jose State University, continuing my academic journey.'
	),
	new Event(
		new Date('08-19-2022'),
		'Internship at CratusTech',
		'I completed an internship at CratusTech, gaining valuable industry experience in my field.'
	),
	new Event(
		new Date('12-15-2023'),
		'Paper Submission at SusTech 2024',
		'I submitted a paper about DIY Home Security systems to SusTech 2024 IEEE Conference on Technologies for Sustainability, showcasing my research interests.'
	),
	new Event(
		new Date('12-18-2023'),
		'Graduation from SJSU',
		'I graduated from San Jose State University with a Bachelor of Science in Software Engineering, marking a significant milestone in my academic journey.'
	)
];

createEvents.sort(toRecentDates);

const events: { date: string; title: string; description: string }[] = createEvents.map(
	(event) => ({
		date: event.getDate(),
		title: event.getTitle(),
		description: event.getDescription()
	})
);

export default events;
