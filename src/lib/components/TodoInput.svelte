<script lang="ts">
	import { persistentTodos as todos } from '$lib/stores/persistentTodoStore';

	let inputText = '';

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (inputText.trim()) {
			todos.addTodo(inputText.trim());
			inputText = '';
		}
	}
</script>

<form on:submit={handleSubmit} class="todo-input-form">
	<input
		type="text"
		bind:value={inputText}
		placeholder="What needs to be done?"
		class="todo-input"
		aria-label="New todo"
	/>
	<button type="submit" class="btn-add" disabled={!inputText.trim()}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<line x1="12" y1="5" x2="12" y2="19" />
			<line x1="5" y1="12" x2="19" y2="12" />
		</svg>
		Add
	</button>
</form>

<style>
	.todo-input-form {
		display: flex;
		gap: 0.75rem;
		margin-bottom: 2rem;
	}

	.todo-input {
		flex: 1;
		padding: 1rem;
		font-size: 1rem;
		border: 2px solid #e0e0e0;
		border-radius: 8px;
		outline: none;
		transition: border-color 0.2s ease;
	}

	.todo-input:focus {
		border-color: #4caf50;
	}

	.btn-add {
		padding: 1rem 1.5rem;
		background: #4caf50;
		color: white;
		border: none;
		border-radius: 8px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.btn-add:hover:not(:disabled) {
		background: #45a049;
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(76, 175, 80, 0.3);
	}

	.btn-add:disabled {
		background: #ccc;
		cursor: not-allowed;
	}
</style>
