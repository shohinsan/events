import type { EventItem } from '$customTypes';

interface EventsConfig {
	events: EventItem[];
}

const eventConfig: EventsConfig = {
	events: [
		{
			date: '02-08-1997',
			description: 'Born and raised in Dushanbe, Tajikistan.'
		},
		{
			date: '07-15-2015',
			description: 'Graduated from high school.'
		},
		{
			date: '04-01-2017',
			description: 'Moved to the United States due to migration.'
		},
		{
			date: '08-01-2018',
			description: 'Enrolled to De Anza Community College.'
		},
		{
			date: '08-19-2021',
			description: 'Enrolled and transfered to San Jose State University.'
		},
		{
			date: '12-18-2023',
			description:
				'Graduated from San Jose State University as a Bachelor of Science in Software Engineering.'
		},
	]
};

export default eventConfig;
