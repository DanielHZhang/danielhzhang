import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function tw(template: TemplateStringsArray, ...params: ClassValue[]): string {
	return twMerge(clsx(String.raw(template, ...params)));
}
