<script lang="ts">
	import Calc from '$lib/FutureValueCalc.svelte';
	import Dropdown from '$lib/dropdownSelector.svelte'
	import '../app.css';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-full max-w-xl mx-auto">
	<Dropdown/>
	<Calc />
</section>
