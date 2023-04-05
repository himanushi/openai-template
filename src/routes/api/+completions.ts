import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

interface SubmitData {
	message: string;
	card: number;
	position: number;
}

export const POST: RequestHandler = async (event) => {
	const body = await event.request.formData();
	const cardNo = body.get('cardNo')?.toString();

	// log all headers
	const completion = await fetch('https://api.openai.com/v1/chat/completions', {
		headers: {
			'Content-Type': 'application/json'
			// Authorization: `Bearer ${}`
		},
		method: 'POST',
		body: JSON.stringify({
			// messages: conversationMode ? messages : messages.slice(-1),
			model: 'gpt-3.5-turbo'
			// stream: true,
			// temperature: temperature ?? 1,
			// top_p: topP ?? 1,
			// ...(maxTokens ? { max_tokens: maxTokens } : {})
		})
	});

	return json({
		userAgent: event.request.headers.get('user-agent')
	});
};
