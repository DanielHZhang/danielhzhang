import * as THREE from 'three';

type Vec3 = [number, number, number];

export function lorenzAttractor([x, y, z]: Vec3, timestep: number) {
	const beta = 8 / 3;
	const rho = 28;
	const sigma = 10;

	const dx = sigma * (y - x) * timestep;
	const dy = (x * (rho - z) - y) * timestep;
	const dz = (x * y - beta * z) * timestep;

	return [dx, dy, dz];
}

export function randomPointOnSphere(radius: number, out: number[] = []) {
	const u = Math.random() * Math.PI * 2;
	const v = Math.random() * 2 - 1;
	const phi = u;
	const theta = Math.acos(v);
	out[0] = radius * Math.sin(theta) * Math.cos(phi);
	out[1] = radius * Math.sin(theta) * Math.sin(phi);
	out[2] = radius * Math.cos(theta);
	return out;
}

export function createAttractor(length: number, start?: number[]) {
	const positions = [];

	const p = start ? start : randomPointOnSphere(1);
	for (let i = 0; i < length; i++) {
		positions.push(new THREE.Vector3().fromArray(p));
	}

	const currentPosition = new THREE.Vector3().fromArray(p);
	return [positions, currentPosition] as const;
}
