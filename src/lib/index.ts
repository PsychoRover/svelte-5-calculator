// place files you want to import through the `$lib` alias in this folder.
export function isNumeric(value: string): boolean {
	return /^-?\d+$/.test(value);
}
