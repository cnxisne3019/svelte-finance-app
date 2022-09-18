<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main class="px-4">
	<slot />
</main>

<footer class="px-4 py-6 text-center">
	<p class="text-xs text-slate-500 font-semibold">visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>
