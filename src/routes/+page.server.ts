import { projects, workExperience } from '$lib/server/data';

export function load() {
	return {
		workExperience,
		projects,
	};
}
