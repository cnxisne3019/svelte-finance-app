<script lang="ts">
	import * as utils from '$lib/ts/utils';
	import * as formula from '$lib/ts/formula';

	let result: any = 0;


	const formValues: { pv: '' | number; interest: number; period: number } = {
		pv: '',
		interest: 0,
		period: 0
	};

	function Calc() {
		result = formula.fv(formValues.pv, formValues.interest, formValues.period).toFixed(2);
	}
</script>

<div class="flex flex-col space-y-4 ">
	<div
		class="w-full bg-slate-300/20 p-4 border border-slate-100 rounded-lg text-center space-y-2"
	>
		<h2 class="text-sm font-semibold text-slate-500">Future Value Result</h2>
		<div class="text-5xl font-bold text-sky-500">{utils.numberWithCommas(result)}</div>
	</div>

	<label class="space-y-2">
		<div class="text-sm text-slate-600 font-semibold">Initialize Fund</div>
		<div class="w-full bg-white px-4 py-2 border border-slate-100 rounded-lg flex justify-between">
			<input
				class="w-full bg-transparent outline-none"
				type="text"
				placeholder="0"
				bind:value={formValues.pv}
				min="0"
			/>
			<div class="w-1/4 text-right font-semibold text-slate-800">THB</div>
		</div>
	</label>

	<label class="space-y-2">
		<div class="text-sm text-slate-600 font-semibold">Interest Rate</div>
		<div class="w-full bg-white px-4 py-2 border border-slate-100 rounded-lg flex justify-between">
			<input
				class="w-full bg-transparent outline-none"
				pattern="^[0-9]*$"
				type="text"
				data-type="number"
				bind:value={formValues.interest}
				min="0"
				required
			/>
			<div class="w-1/3 text-right font-semibold text-slate-800">% Yearly</div>
		</div>
	</label>

	<label class="space-y-2">
		<div class="text-sm text-slate-600 font-semibold">Investment Time</div>
		<div class="w-full bg-white px-4 py-2 border border-slate-100 rounded-lg flex justify-between">
			<input
				class="w-full bg-transparent outline-none"
				type="text"
				bind:value={formValues.period}
				min="0"
			/>
			<div class="w-1/4 text-right font-semibold text-slate-800">Year</div>
		</div>
	</label>

	<button on:click={Calc} class="w-full bg-emerald-400 text-white py-4 rounded-xl font-semibold">Calculate</button>
	<pre>{JSON.stringify(formValues, null, 2)}</pre>
</div>
