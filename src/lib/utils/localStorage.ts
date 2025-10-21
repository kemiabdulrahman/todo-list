import type { Todo } from '$lib/types/todo';

const STORAGE_KEY = 'sveltekit-todos';

export function loadTodosFromStorage(): Todo[] {
	if (typeof window === 'undefined') return [];

	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (!stored) return [];

		const todos = JSON.parse(stored);
		// Convert date strings back to Date objects
		return todos.map((todo: Todo) => ({
			...todo,
			createdAt: new Date(todo.createdAt),
			updatedAt: new Date(todo.updatedAt)
		}));
	} catch (error) {
		console.error('Error loading todos from localStorage:', error);
		return [];
	}
}

export function saveTodosToStorage(todos: Todo[]): void {
	if (typeof window === 'undefined') return;

	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
	} catch (error) {
		console.error('Error saving todos to localStorage:', error);
	}
}

export function clearTodosFromStorage(): void {
	if (typeof window === 'undefined') return;

	try {
		localStorage.removeItem(STORAGE_KEY);
	} catch (error) {
		console.error('Error clearing todos from localStorage:', error);
	}
}
