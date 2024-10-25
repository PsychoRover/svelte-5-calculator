<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<!-- Center the calculator on screen -->
<div class="min-h-screen flex items-center justify-center">
	<!-- Calculator container with shadow and rounded corners -->
	<div class="bg-slate-100 p-6 rounded-xl shadow-xl w-[300px]">
		{@render children()}
	</div>
</div>
