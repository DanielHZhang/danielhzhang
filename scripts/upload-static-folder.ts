import { $ } from 'bun';
import { readdir } from 'fs/promises';

console.log('Uploading static files to R2 bucket...');

const bucketName = 'danielhzhang';
const entries = await readdir('./static', { withFileTypes: true });
await Promise.all(
	entries.map(async (entry) => {
		if (!entry.isFile()) {
			return;
		}
		const fileName = entry.name;
		await $`wrangler r2 object put ${bucketName}/${fileName} --file="./static/${fileName}"`;
	}),
);

console.log('Upload complete.');
