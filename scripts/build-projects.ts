import { $ } from 'bun';
import * as esbuild from 'esbuild';

const workingDir = process.cwd();
const staticDir = `${workingDir}/static`;

process.chdir('crates/conways_golot');

await $`cargo build --profile release --features bevy/webgpu --target wasm32-unknown-unknown`;
await $`wasm-bindgen --out-dir ${staticDir} --out-name conways_golot --target web target/wasm32-unknown-unknown/release/conways_golot.wasm`;

// Move the declaration file to the projects directory
const dtsFile = `conways_golot.d.ts`;
const declarationFile = Bun.file(`${staticDir}/${dtsFile}`);
await Bun.write(`${workingDir}/src/lib/projects/${dtsFile}`, declarationFile);
await Promise.all([declarationFile.delete(), Bun.file(`${staticDir}/conways_golot_bg.wasm.d.ts`).delete()]);

// Remove the line that causes hot reloading to fail (see: https://github.com/bevyengine/bevy/discussions/11619)
const initFile = `${staticDir}/conways_golot.js`;
const contents = await Bun.file(initFile).text();
const updated = contents.replaceAll('if (wasm !== undefined) return wasm;', '');
await Bun.write(initFile, updated);

// Minify the JS file
await esbuild.build({
	minify: true,
	allowOverwrite: true,
	entryPoints: [`${staticDir}/conways_golot.js`],
	outfile: `${staticDir}/conways_golot.js`,
});
