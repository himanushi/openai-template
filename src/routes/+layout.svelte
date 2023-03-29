<script lang="ts">
	import { initialize } from '@ionic/core';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => {
		initialize({
			mode: 'ios',
			animated: true
		});
		ready = true;
	});
</script>

{#if ready}
	<ion-app>
		<ion-header>
			<ion-toolbar>
				<ion-title>Header</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<slot />
		</ion-content>
		<ion-footer>
			<ion-toolbar>
				<ion-title>Footer</ion-title>
			</ion-toolbar>
		</ion-footer>
	</ion-app>
{/if}
