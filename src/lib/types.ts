import type { IconName } from './assets/icons';

export type WorkExperience = {
	company: {
		name: string;
		url: string;
		brandColor: string;
	};
	role: string;
	description: string;
	tech: { name: string; icon: IconName }[];
	time: string;
	image: string;
};

export type Project = {
	title: string;
	tags: { name: string; icon: IconName }[];
	language?: IconName;
	description: string;
	url?: string;
	githubUrl?: string;
};
