<script lang="ts">
	import FV from '$lib/FutureValue.svelte';

	let formulas = [
		{ id: '0', heading: 'Future Value' },
		{ id: '1', heading: 'Find Interest' }
	];

	$: selected = formulas.find((o) => o.id === '0');
</script>

<div class="pt-4 flex justify-end">
	<div class="bg-emerald-500 flex space-x-2 rounded-full px-4 py-1.5 ">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			id="Capa_1"
			x="0px"
			y="0px"
			viewBox="0 0 197.143 197.143"
			style="enable-background:new 0 0 197.143 197.143; width: 18px;"
			xml:space="preserve"
			><script xmlns=""></script>
			<g>
				<g>
					<path
						style="fill:#FFF;"
						d="M195.031,166.074l-85.592-148.24c-2.226-3.89-6.403-6.306-10.89-6.306    c-4.477,0-8.65,2.412-10.894,6.292L1.68,166.747c-2.24,3.876-2.24,8.689,0,12.565c2.24,3.887,6.413,6.302,10.887,6.302h172.01    c6.929,0,12.565-5.644,12.565-12.58C197.143,170.447,196.377,167.956,195.031,166.074z M184.577,178.324H12.571    c-1.882,0-3.643-1.009-4.585-2.645c-0.945-1.636-0.948-3.665,0-5.3L93.961,21.456c0.941-1.628,2.698-2.645,4.588-2.645    c1.882,0,3.654,1.016,4.592,2.645l85.764,148.537c0.626,0.895,0.966,1.943,0.966,3.046    C189.871,175.952,187.491,178.324,184.577,178.324z"
					/>
					<polygon
						style="fill:#FFF;"
						points="102.504,134.938 104.486,67.255 89.709,67.255 91.681,134.938   "
					/>
					<path
						style="fill:#FFF;"
						d="M97.096,144.637c-5.146,0-8.879,3.905-8.879,9.28c0,5.39,3.733,9.294,8.879,9.294    c5.229,0,8.886-3.815,8.886-9.294C105.982,148.452,102.328,144.637,97.096,144.637z"
					/>
				</g>
			</g>
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
		</svg>
		<div class="font-semibold text-white text-sm">วิธีใช้งาน</div>
	</div>
</div>

<div class="p-4 my-4 bg-white text-slate-800 border-[0.5px] border-slate-200 rounded-xl">
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