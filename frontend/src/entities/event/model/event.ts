import type { EventData } from './types'

class Event {
	date: Date
	title: string
	description: string

	constructor(data: EventData) {
		this.date = data.date
		this.title = data.title
		this.description = data.description
	}

	getEvents(): EventData {
		return {
			date: this.date,
			title: this.title,
			description: this.description
		}
	}
}

const createEvents: Event[] = [
	new Event({
		date: new Date('1997-02-08'),
		title: 'Birth Date',
		description: 'I was born and raised in Dushanbe, Tajikistan.'
	}),
	new Event({
		date: new Date('2015-07-15'),
		title: 'High School Graduation',
		description:
			'I successfully graduated from high school, marking the completion of my secondary education.'
	}),
	new Event({
		date: new Date('04-01-2017'),
		title: 'Migration to the US',
		description:
			'I made a life-changing decision to move to the United States due to migration, seeking new opportunities.'
	}),
	new Event({
		date: new Date('08-01-2018'),
		title: 'Enrolled in De Anza College',
		description:
			'I enrolled at De Anza Community College, taking my first steps towards higher education in the US.'
	}),
	new Event({
		date: new Date('08-19-2021'),
		title: 'Transferred to SJSU',
		description:
			'I successfully transferred to San Jose State University, continuing my academic journey.'
	}),
	new Event({
		date: new Date('08-19-2022'),
		title: 'Internship at CratusTech',
		description:
			'I completed an internship at CratusTech, gaining valuable industry experience in my field.'
	}),
	new Event({
		date: new Date('12-15-2023'),
		title: 'Paper Submission at SusTech 2024',
		description:
			'I submitted a paper about DIY Home Security systems to SusTech 2024 IEEE Conference on Technologies for Sustainability, showcasing my research interests.'
	}),
	new Event({
		date: new Date('12-18-2023'),
		title: 'Graduation from SJSU',
		description:
			'I graduated from San Jose State University with a Bachelor of Science in Software Engineering, marking a significant milestone in my academic journey.'
	})
]

const events: EventData[] = createEvents
	.sort((a, b) => b.date.getTime() - a.date.getTime())
	.map((event) => event.getEvents())

export default events
