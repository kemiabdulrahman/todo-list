<script lang="ts">
	import type { Todo } from '$lib/types/todo';
	import { persistentTodos as todos } from '$lib/stores/persistentTodoStore';

	export let todo: Todo;

	let isEditing = false;
	let editText = todo.text;

	function handleToggle() {
		todos.toggleTodo(todo.id);
	}

	function handleDelete() {
		todos.deleteTodo(todo.id);
	}

	function startEdit() {
		isEditing = true;
		editText = todo.text;
	}

	function saveEdit() {
		if (editText.trim()) {
			todos.updateTodoText(todo.id, editText.trim());
			isEditing = false;
		}
	}

	function cancelEdit() {
		isEditing = false;
		editText = todo.text;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			saveEdit();
		} else if (e.key === 'Escape') {
			cancelEdit();
		}
	}
</script>

<div class="todo-item" class:completed={todo.completed}>
	<div class="todo-content">
		<input
			type="checkbox"
			checked={todo.completed}
			on:change={handleToggle}
			class="todo-checkbox"
			aria-label="Toggle todo completion"
		/>

		{#if isEditing}
			<input
				type="text"
				bind:value={editText}
				on:keydown={handleKeydown}
				on:blur={saveEdit}
				class="todo-edit-input"
				autofocus
			/>
		{:else}
			<span class="todo-text" on:dblclick={startEdit}>
				{todo.text}
			</span>
		{/if}
	</div>

	<div class="todo-actions">
		{#if !isEditing}
			<button on:click={startEdit} class="btn-edit" aria-label="Edit todo">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
					<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
				</svg>
			</button>
			<button on:click={handleDelete} class="btn-delete" aria-label="Delete todo">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<polyline points="3 6 5 6 21 6" />
					<path
						d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
					/>
				</svg>
			</button>
		{/if}
	</div>
</div>

<style>
	.todo-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background: white;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		margin-bottom: 0.75rem;
		transition: all 0.2s ease;
	}

	.todo-item:hover {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
		transform: translateY(-2px);
	}

	.todo-item.completed {
		opacity: 0.7;
	}

	.todo-content {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		flex: 1;
	}

	.todo-checkbox {
		width: 20px;
		height: 20px;
		cursor: pointer;
		accent-color: #4caf50;
	}

	.todo-text {
		flex: 1;
		cursor: pointer;
		user-select: none;
		font-size: 1rem;
		color: #333;
	}

	.todo-item.completed .todo-text {
		text-decoration: line-through;
		color: #999;
	}

	.todo-edit-input {
		flex: 1;
		padding: 0.5rem;
		border: 2px solid #4caf50;
		border-radius: 4px;
		font-size: 1rem;
		outline: none;
	}

	.todo-actions {
		display: flex;
		gap: 0.5rem;
	}

	.btn-edit,
	.btn-delete {
		padding: 0.5rem;
		border: none;
		background: transparent;
		cursor: pointer;
		border-radius: 4px;
		transition: all 0.2s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.btn-edit {
		color: #2196f3;
	}

	.btn-edit:hover {
		background: #e3f2fd;
	}

	.btn-delete {
		color: #f44336;
	}

	.btn-delete:hover {
		background: #ffebee;
	}
</style>
