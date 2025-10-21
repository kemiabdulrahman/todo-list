<script lang="ts">
	import { persistentFilteredTodos as filteredTodos } from '$lib/stores/persistentTodoStore';
	import TodoItem from './TodoItem.svelte';
</script>

<div class="todo-list">
	{#if $filteredTodos.length === 0}
		<div class="empty-state">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="64"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M9 11l3 3L22 4" />
				<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
			</svg>
			<p>No todos found</p>
		</div>
	{:else}
		{#each $filteredTodos as todo (todo.id)}
			<TodoItem {todo} />
		{/each}
	{/if}
</div>

<style>
	.todo-list {
		margin-bottom: 2rem;
	}

	.empty-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 3rem;
		color: #999;
		text-align: center;
	}

	.empty-state svg {
		margin-bottom: 1rem;
		opacity: 0.5;
	}

	.empty-state p {
		font-size: 1.1rem;
		margin: 0;
	}
</style>
