export function rafThrottle<T extends any[]>(
	fn: (...args: T) => void,
): {
	(...args: T): void;
	cancel: () => void;
} {
	let recentArgs: T;
	let id: number | null = null;
	const callback = (...args: T) => {
		recentArgs = args; // Get latest arguments if this invocation is ignored due to frame queue
		if (id) {
			return; // Frame is already queued
		}
		id = requestAnimationFrame(() => {
			id = null;
			fn(...recentArgs);
		});
	};
	callback.cancel = () => {
		if (typeof id === 'number') {
			cancelAnimationFrame(id);
			id = null;
		}
	};
	return callback;
}
