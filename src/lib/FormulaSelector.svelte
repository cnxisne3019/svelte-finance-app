<script lang="ts">
	import FV from '$lib/FutureValue.svelte';

	let formulas = [
		{ id: '0', heading: 'Future Value' },
		{ id: '1', heading: 'Find Interest' }
	];

	$: selected = formulas.find((o) => o.id === '0');
</script>

<div class="p-4 my-4 bg-white border border-slate-100 rounded-lg shadow-light">
	<select class="p-2 w-full font-semibold" bind:value={selected}>
		{#each formulas as formula}
			<option value={formula}>
				{formula.heading}
			</option>
		{/each}
	</select>
</div>

<!-- Debug here
<p>Selected {JSON.stringify(selected)}</p>
<p>{selected.id}</p> -->

{#if selected.id === '0'}
	<FV />
{/if}
