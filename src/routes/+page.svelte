<script lang="ts">
	import Icon from '~/components/icon.svelte';
	import { postCompletion } from '~/lib/api';

	const post = () => {
		postCompletion('おはよう！');
	};
</script>

<ion-item>
	<Icon name="add" size="l" color="primary" start />
	<ion-label />
</ion-item>

<ion-item on:click={post}>
	<Icon name="add" size="l" color="primary" end />
	<ion-label />
</ion-item>
<ion-item>
	<ion-textarea />
	<Icon name="add" size="l" color="primary" end />
</ion-item>
