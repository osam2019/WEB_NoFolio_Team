<template>
	<div class="main" id="mainContent">
		<Page />
	</div>
</template>

<script>
	import Page from './main/Page.vue';
	
	export default {
		name: 'Main',
		components: {
			Page
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.main {
		display: flex;
		position: relative;
		flex: 1;
		justify-content: center;
		padding: 120px;
		overflow-y: auto;
	}
</style>
