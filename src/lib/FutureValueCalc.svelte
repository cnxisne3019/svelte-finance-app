<script lang="ts">
	let result: any = 0;

	let presentValue: number = 0;
	let interestRate: number = 0;
	let investPeriod: number = 0;

	function fvFormula(pv: number, i: number, t: number) {
		return pv * (1 + convertPercentage(i)) ** t;
	}

	function convertPercentage(i: number) {
		return i / 100;
	}

	function Calc() {
		result = fvFormula(presentValue, interestRate, investPeriod).toFixed(2);
	}

	function numberWithCommas(x: number) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	interestRate = 10000;

	console.log(interestRate.toLocaleString());
</script>

<div class="w-full max-w-xl mx-auto flex flex-col space-y-4 ">
	<div class="w-full bg-slate-200 p-4 rounded-lg">
		<h2 class="text-sm font-semibold text-slate-500">Future Value Result</h2>
		<div class="text-3xl">{numberWithCommas(result)}</div>
	</div>

	<label class="space-y-2">
		<div class="text-sm text-slate-600 font-semibold">Initialize Fund</div>
		<div class="w-full bg-white px-4 py-2 border border-slate-100 rounded-lg flex justify-between">
			<input class="w-full bg-transparent" type="text" bind:value={presentValue} min="0" />
			<div class="w-1/4 text-right font-semibold text-slate-800">THB</div>
		</div>
	</label>

	<label class="space-y-2">
		<div class="text-sm text-slate-600 font-semibold">Interest Rate</div>
		<div class="w-full bg-white px-4 py-2 border border-slate-100 rounded-lg flex justify-between">
			<input
				class="w-full bg-transparent"
				pattern="^[0-9]*$"
				type="text"
				data-type="number"
				bind:value={interestRate}
				min="0"
				required
			/>
			<div class="w-1/4 text-right font-semibold text-slate-800">% Yearly</div>
		</div>
	</label>

	<label class="space-y-2">
		<div class="text-sm text-slate-600 font-semibold">Investment Time</div>
		<div class="w-full bg-white px-4 py-2 border border-slate-100 rounded-lg flex justify-between">
			<input
				class="w-full bg-transparent outline-none"
				type="text"
				bind:value={investPeriod}
				min="0"
			/>
			<div class="w-1/4 text-right font-semibold text-slate-800">Year</div>
		</div>
	</label>

	<button on:click={Calc} class="w-full bg-slate-700 text-white py-4">Submit</button>

</div>
