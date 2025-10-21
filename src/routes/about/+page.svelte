<svelte:head>
	<title>About - Todo App</title>
</svelte:head>

<div class="about-container">
	<h1>About This Project</h1>

	<section class="section">
		<h2>Overview</h2>
		<p>
			This is a modern todo list application built with <strong>SvelteKit</strong>, showcasing
			best practices in web development and demonstrating key SvelteKit concepts.
		</p>
	</section>

	<section class="section">
		<h2>Features</h2>
		<ul class="feature-list">
			<li>Create, edit, and delete todos</li>
			<li>Mark todos as complete/incomplete</li>
			<li>Filter todos by status (all, active, completed)</li>
			<li>Real-time statistics dashboard</li>
			<li>Responsive design for all devices</li>
			<li>Clean and intuitive user interface</li>
		</ul>
	</section>

	<section class="section">
		<h2>Technologies Used</h2>
		<div class="tech-grid">
			<div class="tech-card">
				<h3>SvelteKit</h3>
				<p>Modern framework for building web applications</p>
			</div>
			<div class="tech-card">
				<h3>TypeScript</h3>
				<p>Type-safe code for better maintainability</p>
			</div>
			<div class="tech-card">
				<h3>Svelte Stores</h3>
				<p>Reactive state management solution</p>
			</div>
			<div class="tech-card">
				<h3>CSS3</h3>
				<p>Modern styling with animations and transitions</p>
			</div>
		</div>
	</section>

	<section class="section">
		<h2>Architecture Highlights</h2>
		<div class="architecture-list">
			<div class="arch-item">
				<strong>Component-Based Structure:</strong> Reusable components for maintainability
			</div>
			<div class="arch-item">
				<strong>Type Safety:</strong> TypeScript interfaces for todos and filters
			</div>
			<div class="arch-item">
				<strong>Store Pattern:</strong> Centralized state management with derived stores
			</div>
			<div class="arch-item">
				<strong>Reactive Design:</strong> Automatic UI updates on state changes
			</div>
			<div class="arch-item">
				<strong>Proper Routing:</strong> SvelteKit's file-based routing system
			</div>
		</div>
	</section>

	<section class="section cta">
		<h2>Ready to Get Started?</h2>
		<a href="/" class="btn-primary">Go to Todo List</a>
	</section>
</div>

<style>
	.about-container {
		max-width: 900px;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.5rem;
		color: #333;
		margin-bottom: 2rem;
		text-align: center;
	}

	.section {
		margin-bottom: 3rem;
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	h2 {
		font-size: 1.8rem;
		color: #4caf50;
		margin-bottom: 1rem;
	}

	p {
		font-size: 1.1rem;
		line-height: 1.6;
		color: #666;
	}

	.feature-list {
		list-style: none;
		padding: 0;
	}

	.feature-list li {
		padding: 0.75rem 0;
		padding-left: 2rem;
		position: relative;
		font-size: 1.1rem;
		color: #555;
	}

	.feature-list li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: #4caf50;
		font-weight: bold;
		font-size: 1.2rem;
	}

	.tech-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin-top: 1rem;
	}

	.tech-card {
		background: #f5f5f5;
		padding: 1.5rem;
		border-radius: 8px;
		text-align: center;
	}

	.tech-card h3 {
		color: #2196f3;
		margin-bottom: 0.5rem;
	}

	.tech-card p {
		font-size: 0.9rem;
		margin: 0;
	}

	.architecture-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.arch-item {
		padding: 1rem;
		background: #f9f9f9;
		border-left: 4px solid #4caf50;
		border-radius: 4px;
		font-size: 1rem;
		line-height: 1.6;
	}

	.arch-item strong {
		color: #333;
	}

	.cta {
		text-align: center;
		background: linear-gradient(135deg, #4caf50 0%, #2196f3 100%);
		color: white;
	}

	.cta h2 {
		color: white;
	}

	.btn-primary {
		display: inline-block;
		padding: 1rem 2rem;
		background: white;
		color: #4caf50;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
		font-size: 1.1rem;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		.section {
			padding: 1.5rem;
		}

		.tech-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
