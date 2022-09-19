<script lang="ts">
    let result = 0;

    let initailizeFund: number = 0;
    let investPeriod: number = 0;
    let interestRate: number = 0;

    result = fvCalculation(initailizeFund, investPeriod, interestRate);

    console.log(result);

    function fvCalculation (x: number, y: number, z: number){
        return x*y+z;
    }

    console.log('Fund is: ', initailizeFund);
    console.log(typeof initailizeFund);
</script>

<div class="w-full max-w-xl mx-auto flex flex-col space-y-4 ">
    
    <label class="space-y-2">
        <div class="text-sm text-slate-600 font-semibold">Initialize Fund</div>
        <input class="w-full px-4 py-2 border border-slate-100 rounded-lg" type=text bind:value={initailizeFund}>
    </label>
        
    
    <label class="space-y-2">
        <div class="text-sm text-slate-600 font-semibold">Interest Rate</div>
        <div class="w-full bg-white px-4 py-2 border border-slate-100 rounded-lg flex justify-between">
            <input class="w-full bg-transparent" type=text bind:value={investPeriod} min=0>
            <div class="w-1/4 text-right font-semibold text-slate-800">% Yearly</div>
        </div>
        
    </label>
    
    <pre><b>initailizeFund variable type is:</b> {typeof +initailizeFund}</pre>
</div>