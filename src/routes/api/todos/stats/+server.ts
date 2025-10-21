import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	// This is a demo endpoint showing how to create API routes
	const stats = {
		timestamp: new Date().toISOString(),
		message: 'Stats endpoint - would typically fetch from database'
	};
	return json(stats);
};
