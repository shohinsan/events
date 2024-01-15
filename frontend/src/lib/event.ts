import type { EventItem } from '$customTypes';

interface EventsConfig {
	events: EventItem[];
}

export const eventConfig: EventsConfig = {
	events: [
		{
			date: '01-07-2021',
			description: 'In progress'
		},
		{
			date: '01-07-2022',
			description: 'In progress'
		},
		{
			date: '01-07-2019',
			description: 'In progress'
		}
	]
};
