<script lang="ts">
	import '../app.css';
</script>

<header>
	<img
		class="absolute z-[-10] top-0 object-contain"
		src="https://tailwindui.com/img/beams-basic.png"
		alt=""
	/>
</header>

<main class="px-4">
	<slot />
</main>

<footer class="px-4 pt-4 text-center">
	<p class="text-xs text-slate-500 font-light">
		visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
	</p>
</footer>
