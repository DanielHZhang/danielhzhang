/**
 * Returns a random integer between the specified values (inclusive).
 */
export function randomInteger(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
