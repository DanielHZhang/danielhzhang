import { projects } from '$lib/server/data';

export function load() {
	const project = projects.find((project) => project.title === `Conway's Game of Life Over Time`)!;
	return {
		project,
	};
}
