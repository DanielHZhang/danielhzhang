export function r(strings: TemplateStringsArray, ...args: any[]): string {
	const result = strings.reduce((acc, cur, index) => {
		let temp = cur;
		if (index < args.length) {
			temp += args[index];
		}
		return (acc += temp);
	}, '');
	// Replace all newlines (and their following whitespaces)
	return result.replaceAll(/\n(\s+)?/g, ' ');
}

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

export function capitalizeFirst(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function randInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function option<T>(): T | undefined {
	return undefined;
}
