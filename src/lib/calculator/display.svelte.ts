import { solver } from './solver.svelte';

class Display {
	private static readonly INVALID_EXPRESSION: string = 'Invalid Expression';

	private static readonly isOperator = (value: string): boolean => /[+\-x÷]/.test(value);

	private value: string = $state('');

	update(value: string): void {
		// Turn off answer mode if operator is pressed
		if (solver.ans && Display.isOperator(value)) solver.ans = false;

		// Do nothing if answer mode is on and operator is not pressed
		if (solver.ans && !Display.isOperator(value)) return;

		// Quick reset after invalid input
		if (this.value === Display.INVALID_EXPRESSION) this.value = '';

		this.value += value;
	}

	set(value: string): void {
		if (solver.ans) solver.ans = false;
		this.value = value;
	}

	get(): string {
		return this.value;
	}

	invalid(): void {
		this.value = Display.INVALID_EXPRESSION;
	}
}

export const display = new Display();
