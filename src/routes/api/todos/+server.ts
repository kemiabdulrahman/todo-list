import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Todo } from '$lib/types/todo';

// In-memory store for demonstration (in production, use a database)
let todos: Todo[] = [];

export const GET: RequestHandler = async () => {
	return json(todos);
};

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const newTodo: Todo = {
		id: crypto.randomUUID(),
		text: data.text,
		completed: false,
		createdAt: new Date(),
		updatedAt: new Date()
	};
	todos = [newTodo, ...todos];
	return json(newTodo, { status: 201 });
};

export const PUT: RequestHandler = async ({ request }) => {
	const data = await request.json();
	todos = todos.map((todo) =>
		todo.id === data.id ? { ...todo, ...data, updatedAt: new Date() } : todo
	);
	return json({ success: true });
};

export const DELETE: RequestHandler = async ({ request }) => {
	const { id } = await request.json();
	todos = todos.filter((todo) => todo.id !== id);
	return json({ success: true });
};
