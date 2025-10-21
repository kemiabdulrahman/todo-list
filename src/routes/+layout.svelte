<script lang="ts">
	import '../app.css';
</script>

<div class="app">
	<header>
		<nav>
			<a href="/" class="logo">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M9 11l3 3L22 4" />
					<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
				</svg>
				Todo App
			</a>
			<div class="nav-links">
				<a href="/">Home</a>
				<a href="/about">About</a>
			</div>
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>Built with SvelteKit | Showcasing modern web development</p>
	</footer>
</div>

<style>
	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	header {
		background: white;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	nav {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1.5rem;
		font-weight: 700;
		color: #4caf50;
		text-decoration: none;
		transition: transform 0.2s ease;
	}

	.logo:hover {
		transform: scale(1.05);
	}

	.nav-links {
		display: flex;
		gap: 2rem;
	}

	.nav-links a {
		color: #333;
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.nav-links a:hover {
		color: #4caf50;
	}

	main {
		flex: 1;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		padding: 2rem;
	}

	footer {
		background: #f5f5f5;
		padding: 2rem;
		text-align: center;
		color: #666;
		margin-top: 4rem;
	}

	footer p {
		margin: 0;
	}

	@media (max-width: 768px) {
		nav {
			flex-direction: column;
			gap: 1rem;
		}

		main {
			padding: 1rem;
		}
	}
</style>
