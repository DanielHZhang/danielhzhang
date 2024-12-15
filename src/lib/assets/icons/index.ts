import type { Component } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';
import * as Icons from './import';

type IconComponent = Component<SVGAttributes<SVGSVGElement>>;
type RemoveIconPrefix<S extends string> = S extends `Icon${infer R}` ? R : never;
export type IconName = RemoveIconPrefix<keyof typeof Icons>;

export function getIcon(name: IconName): IconComponent | undefined {
	return (Icons as Record<string, IconComponent>)[`Icon${name}`];
}

export * from './import';
