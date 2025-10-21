import { writable, derived } from 'svelte/store';
import type { Todo, TodoFilter, TodoStats } from '$lib/types/todo';

function createTodoStore() {
	const { subscribe, set, update } = writable<Todo[]>([]);

	return {
		subscribe,
		set,
		addTodo: (text: string) => {
			const newTodo: Todo = {
				id: crypto.randomUUID(),
				text,
				completed: false,
				createdAt: new Date(),
				updatedAt: new Date()
			};
			update((todos) => [newTodo, ...todos]);
		},
		toggleTodo: (id: string) => {
			update((todos) =>
				todos.map((todo) =>
					todo.id === id
						? { ...todo, completed: !todo.completed, updatedAt: new Date() }
						: todo
				)
			);
		},
		deleteTodo: (id: string) => {
			update((todos) => todos.filter((todo) => todo.id !== id));
		},
		updateTodoText: (id: string, text: string) => {
			update((todos) =>
				todos.map((todo) =>
					todo.id === id ? { ...todo, text, updatedAt: new Date() } : todo
				)
			);
		},
		clearCompleted: () => {
			update((todos) => todos.filter((todo) => !todo.completed));
		}
	};
}

export const todos = createTodoStore();
export const filter = writable<TodoFilter>('all');

export const filteredTodos = derived([todos, filter], ([$todos, $filter]) => {
	switch ($filter) {
		case 'active':
			return $todos.filter((todo) => !todo.completed);
		case 'completed':
			return $todos.filter((todo) => todo.completed);
		default:
			return $todos;
	}
});

export const todoStats = derived(todos, ($todos): TodoStats => {
	return {
		total: $todos.length,
		active: $todos.filter((todo) => !todo.completed).length,
		completed: $todos.filter((todo) => todo.completed).length
	};
});
