<script lang="ts">
	import '../app.css';
	const imgUrl = new URL('$public/docs.png', import.meta.url).href
</script>

<main class="px-4">
	<slot />
</main>

<footer class="px-4 py-6 text-center">
	<p class="text-xs text-slate-500 font-light">visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>
