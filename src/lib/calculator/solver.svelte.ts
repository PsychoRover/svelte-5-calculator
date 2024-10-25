import { display } from './display.svelte';
import * as math from 'mathjs'

class Solver {
	public ans: boolean = false;

	solve(): void {
		let result: number = 0;
		let expression: string = display.get().replace(/x/g, '*').replace(/÷/g, '/');

		try {
			result = math.evaluate(expression);
		} catch (error) {
			console.log(error);
			display.invalid();
			return;
		}

		if (result !== undefined) {
			// Determine if decimal representation or integer
			display.set(result % 1 ? result.toFixed(5) : result.toString());

			this.ans = true;
		}
	}
}

export const solver = new Solver();
