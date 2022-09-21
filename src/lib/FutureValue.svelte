<script lang="ts">
	import * as utils from '$lib/ts/utils';
	import * as formula from '$lib/ts/formula';

	const _input: { pv: any; interest: any; period: any } = {
		pv: '',
		interest: '',
		period: ''
	};

	const _inputRaw: { pv: any; interest: any; period: any } = {
		pv: '',
		interest: '',
		period: ''
	};

	// PV Watcher
	$: {
		_inputRaw.pv = utils.str2num(_input.pv) || '';
		_input.pv = utils.int2str(_inputRaw.pv);
	}

	// Interest Rate Watcher
	$: {
		_inputRaw.interest = parseFloat(_input.interest) || '';
		_input.interest = utils.allowDots(_input.interest);
	}

	// Investment Period Watcher
	$: {
		_inputRaw.period = utils.str2num(_input.period) || '';
		_input.period = utils.int2str(_inputRaw.period);
	}

	// Result Watcher
	$: fvResult = utils.str2num(
		formula.fv(_inputRaw.pv, _inputRaw.interest, _inputRaw.period).toFixed(2)
	);
</script>

<div class="flex flex-col space-y-4">
	<!-- Calculated Result -->
	<div class="w-full bg-slate-100 p-6 rounded-xl text-center space-y-2">
		<h2 class="text-sm font-light text-slate-500">มูลค่าเงินลงทุนของคุณในอนาคต</h2>
		<div class="text-5xl font-semibold text-sky-500">{utils.numberWithCommas(fvResult)}</div>
	</div>

	<!-- Form Input -->
	<label class="space-y-2">
		<div class="text-sm text-slate-600 font-semibold">Initialize Fund</div>
		<div class="w-full bg-white px-4 py-3 border border-slate-100 rounded-xl flex justify-between">
			<input
				class="w-full bg-transparent outline-none"
				type="text"
				placeholder="100,000"
				bind:value={_input.pv}
				maxlength="11"
			/>
			<div class="w-1/4 text-right font-semibold text-slate-800">THB</div>
		</div>
	</label>

	<label class="space-y-2">
		<div class="text-sm text-slate-600 font-semibold">Initialize Fund</div>
		<div class="w-full bg-white px-4 py-3 border border-slate-100 rounded-xl flex justify-between">
			<input
				class="w-full bg-transparent outline-none"
				type="text"
				placeholder="30"
				bind:value={_input.period}
				maxlength="2"
			/>
			<div class="w-1/4 text-right font-semibold text-slate-800">Year</div>
		</div>
	</label>

	<label class="space-y-2">
		<div class="text-sm text-slate-600 font-semibold">Annual Interest Rate</div>
		<div class="w-full bg-white px-4 py-3 border border-slate-100 rounded-xl flex justify-between">
			<input
				class="w-full bg-transparent outline-none"
				type="text"
				placeholder="4.5"
				bind:value={_input.interest}
				maxlength="6"
			/>
			<div class="w-1/4 text-right font-semibold text-slate-800">%</div>
		</div>
	</label>

	<!-- <div class="border border-slate-200 p-6 rounded-lg text-sm space-y-3 text-slte-500">
		<h2 class="text-lg font-bold">Debug Panel</h2>
		<pre>_inputRaw: {JSON.stringify(_inputRaw, null, 3)}</pre>
		<pre>_input: {JSON.stringify(_input, null, 3)}</pre>
	</div> -->
</div>
