<script lang="ts">
	import TodoInput from '$lib/components/TodoInput.svelte';
	import TodoList from '$lib/components/TodoList.svelte';
	import TodoFilters from '$lib/components/TodoFilters.svelte';
	import TodoStats from '$lib/components/TodoStats.svelte';
</script>

<svelte:head>
	<title>Todo App - SvelteKit Demo</title>
	<meta name="description" content="A modern todo app built with SvelteKit" />
</svelte:head>

<div class="page-container">
	<div class="hero">
		<h1>My Todo List</h1>
		<p>Stay organized and productive with this elegant todo application</p>
	</div>

	<div class="todo-container">
		<TodoInput />
		<TodoStats />
		<TodoFilters />
		<TodoList />
	</div>
</div>

<style>
	.page-container {
		max-width: 800px;
		margin: 0 auto;
	}

	.hero {
		text-align: center;
		margin-bottom: 3rem;
	}

	.hero h1 {
		font-size: 3rem;
		font-weight: 700;
		color: #333;
		margin-bottom: 0.5rem;
		background: linear-gradient(135deg, #4caf50 0%, #2196f3 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero p {
		font-size: 1.1rem;
		color: #666;
	}

	.todo-container {
		background: #f9f9f9;
		padding: 2rem;
		border-radius: 16px;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 2rem;
		}

		.hero p {
			font-size: 1rem;
		}

		.todo-container {
			padding: 1rem;
		}
	}
</style>
