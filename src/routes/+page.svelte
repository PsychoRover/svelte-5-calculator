<script lang="ts">
	import { display, solver } from '$calc';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<!-- Display section -->
<div class="bg-white mb-4 p-4 rounded-lg shadow-inner h-16 flex items-center justify-end">
	<p class="text-2xl font-mono overflow-hidden text-ellipsis whitespace-nowrap select-none">
		{display.get()}
	</p>
</div>

<!-- Buttons grid -->
<div class="grid grid-cols-4 gap-2">
	<!-- First row -->
	<Button onclick={() => display.set('')}>AC</Button>
	<div class="col-span-2"><!-- Empty space --></div>
	<Button class="bg-blue-500 hover:bg-blue-600" onclick={() => display.update('÷')}>÷</Button>

	<!-- Numbers and operators -->
	<Button onclick={() => display.update('7')}>7</Button>
	<Button onclick={() => display.update('8')}>8</Button>
	<Button onclick={() => display.update('9')}>9</Button>
	<Button class="bg-blue-500 hover:bg-blue-600" onclick={() => display.update('x')}>×</Button>

	<Button onclick={() => display.update('4')}>4</Button>
	<Button onclick={() => display.update('5')}>5</Button>
	<Button onclick={() => display.update('6')}>6</Button>
	<Button class="bg-blue-500 hover:bg-blue-600" onclick={() => display.update('-')}>−</Button>

	<Button onclick={() => display.update('1')}>1</Button>
	<Button onclick={() => display.update('2')}>2</Button>
	<Button onclick={() => display.update('3')}>3</Button>
	<Button class="bg-blue-500 hover:bg-blue-600" onclick={() => display.update('+')}>+</Button>

	<!-- Last row -->
	<Button class="col-span-2" onclick={() => display.update('0')}>0</Button>
	<Button onclick={() => display.update('.')}>.</Button>
	<Button class="bg-blue-500 hover:bg-blue-600" onclick={() => solver.solve()}>=</Button>
</div>
