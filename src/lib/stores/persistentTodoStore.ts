import { writable, derived } from 'svelte/store';
import type { Todo, TodoFilter, TodoStats } from '$lib/types/todo';
import { loadTodosFromStorage, saveTodosToStorage } from '$lib/utils/localStorage';
import { browser } from '$app/environment';

function createPersistentTodoStore() {
	const initialTodos = browser ? loadTodosFromStorage() : [];
	const { subscribe, set, update } = writable<Todo[]>(initialTodos);

	// Auto-save to localStorage on every update
	const customSet = (todos: Todo[]) => {
		set(todos);
		if (browser) saveTodosToStorage(todos);
	};

	const customUpdate = (updater: (todos: Todo[]) => Todo[]) => {
		update((todos) => {
			const updated = updater(todos);
			if (browser) saveTodosToStorage(updated);
			return updated;
		});
	};

	return {
		subscribe,
		set: customSet,
		addTodo: (text: string) => {
			const newTodo: Todo = {
				id: crypto.randomUUID(),
				text,
				completed: false,
				createdAt: new Date(),
				updatedAt: new Date()
			};
			customUpdate((todos) => [newTodo, ...todos]);
		},
		toggleTodo: (id: string) => {
			customUpdate((todos) =>
				todos.map((todo) =>
					todo.id === id
						? { ...todo, completed: !todo.completed, updatedAt: new Date() }
						: todo
				)
			);
		},
		deleteTodo: (id: string) => {
			customUpdate((todos) => todos.filter((todo) => todo.id !== id));
		},
		updateTodoText: (id: string, text: string) => {
			customUpdate((todos) =>
				todos.map((todo) =>
					todo.id === id ? { ...todo, text, updatedAt: new Date() } : todo
				)
			);
		},
		clearCompleted: () => {
			customUpdate((todos) => todos.filter((todo) => !todo.completed));
		}
	};
}

export const persistentTodos = createPersistentTodoStore();
export const persistentFilter = writable<TodoFilter>('all');

export const persistentFilteredTodos = derived(
	[persistentTodos, persistentFilter],
	([$todos, $filter]) => {
		switch ($filter) {
			case 'active':
				return $todos.filter((todo) => !todo.completed);
			case 'completed':
				return $todos.filter((todo) => todo.completed);
			default:
				return $todos;
		}
	}
);

export const persistentTodoStats = derived(persistentTodos, ($todos): TodoStats => {
	return {
		total: $todos.length,
		active: $todos.filter((todo) => !todo.completed).length,
		completed: $todos.filter((todo) => todo.completed).length
	};
});
