<script lang="ts">
	import { persistentFilter as filter } from '$lib/stores/persistentTodoStore';
	import type { TodoFilter } from '$lib/types/todo';

	const filters: { label: string; value: TodoFilter }[] = [
		{ label: 'All', value: 'all' },
		{ label: 'Active', value: 'active' },
		{ label: 'Completed', value: 'completed' }
	];

	function setFilter(newFilter: TodoFilter) {
		filter.set(newFilter);
	}
</script>

<div class="filter-buttons">
	{#each filters as filterOption}
		<button
			on:click={() => setFilter(filterOption.value)}
			class="filter-btn"
			class:active={$filter === filterOption.value}
		>
			{filterOption.label}
		</button>
	{/each}
</div>

<style>
	.filter-buttons {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.filter-btn {
		padding: 0.5rem 1rem;
		background: white;
		border: 2px solid #e0e0e0;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.filter-btn:hover {
		border-color: #4caf50;
	}

	.filter-btn.active {
		background: #4caf50;
		color: white;
		border-color: #4caf50;
	}
</style>
