<script lang="ts">
	import Icon from '~/components/icon.svelte';
	import { postCompletion } from '~/lib/api';

	let message: string | null | undefined = '';
	let resultMessage: string | undefined;
	const post = async () => {
		if (message) {
			const result = await postCompletion(message);
			resultMessage = result.message;
		}
	};
</script>

<ion-item>
	<ion-textarea on:ionChange={(e) => (message = e.detail.value)} />
	<Icon name="add" size="l" color="primary" end />
</ion-item>
<ion-item on:click={post}> POST </ion-item>
<ion-item>
	<ion-label>
		{resultMessage}
	</ion-label>
</ion-item>
