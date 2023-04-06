import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

interface Message {
	role: 'user' | 'system' | 'assistant';
	content: string;
}

interface PostBody {
	messages: Message[];
	model: string;
}

type ApiResponse = {
	id: string;
	object: string;
	created: number;
	model: string;
	usage: { prompt_tokens: number; completion_tokens: number; total_tokens: number };
	choices: {
		message: Message;
		finish_reason: string;
		index: number;
	}[];
};

export const POST: RequestHandler = async (event) => {
	const body = await event.request.formData();
	const message = body.get('message')?.toString();

	if (!message) {
		return json({
			error: 'No message provided'
		});
	}

	const postBody: PostBody = {
		messages: [{ role: 'user', content: message }],
		model: 'gpt-3.5-turbo'
	};

	const completion = await fetch('https://api.openai.com/v1/chat/completions', {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
		},
		method: 'POST',
		body: JSON.stringify(postBody)
	});

	const jsonData: ApiResponse = await completion.json();
	const content = jsonData.choices[0].message.content;

	return json({ message: content });
};
