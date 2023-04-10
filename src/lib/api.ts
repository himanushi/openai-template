export async function postCompletion(message: string) {
	const formData = new FormData();
	formData.append('message', message);

	const response = await fetch('/api/completions', {
		method: 'POST',
		body: formData
	});

	if (!response.ok) {
		throw new Error('Failed to post completion');
	}

	const result: { message: string } = await response.json();
	return result;
}
