<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sendSelectedFormula() {
		dispatch('sendData', {
			value: 1000
		});
	}

	let formulas = [
		{ id: 0, heading: 'Future Value' },
		{ id: 1, heading: 'Find Interest' }
	];

	let selected: any;
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
<button on:click={() => dispatch('notify', 'detail value')}>Fire Event</button>
<p>selected formula {selected ? selected.id : '[waiting...]'}</p>

<!-- {#if selected.id == 0}
	<p>Show first</p>
	{:else}
	<p>Error</p>
{/if} -->
