<script lang="ts">
	import {
		persistentTodoStats as todoStats,
		persistentTodos as todos
	} from '$lib/stores/persistentTodoStore';
</script>

<div class="stats-container">
	<div class="stat-card">
		<span class="stat-value">{$todoStats.total}</span>
		<span class="stat-label">Total</span>
	</div>
	<div class="stat-card active">
		<span class="stat-value">{$todoStats.active}</span>
		<span class="stat-label">Active</span>
	</div>
	<div class="stat-card completed">
		<span class="stat-value">{$todoStats.completed}</span>
		<span class="stat-label">Completed</span>
	</div>

	{#if $todoStats.completed > 0}
		<button on:click={() => todos.clearCompleted()} class="btn-clear">
			Clear Completed
		</button>
	{/if}
</div>

<style>
	.stats-container {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: center;
		margin-bottom: 1.5rem;
	}

	.stat-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem 1.5rem;
		background: white;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		min-width: 100px;
	}

	.stat-card.active {
		border-left: 4px solid #2196f3;
	}

	.stat-card.completed {
		border-left: 4px solid #4caf50;
	}

	.stat-value {
		font-size: 2rem;
		font-weight: 700;
		color: #333;
	}

	.stat-label {
		font-size: 0.85rem;
		color: #666;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.btn-clear {
		padding: 0.75rem 1.25rem;
		background: #f44336;
		color: white;
		border: none;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
		margin-left: auto;
	}

	.btn-clear:hover {
		background: #d32f2f;
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(244, 67, 54, 0.3);
	}
</style>
