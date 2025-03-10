export function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

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
