export type WorkExperience = {
	company: {
		name: string;
		url: string;
		brandColor: string;
	};
	role: string;
	description: string;
	tech: { name: string; icon: string }[];
	time: string;
	image: string;
};

export type Project = {
	title: string;
	tags: { name: string; icon: string }[];
	language?: string;
	description: string;
	url?: string;
};
