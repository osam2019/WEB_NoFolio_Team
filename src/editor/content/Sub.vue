<template>
	<div class="sub">
		<Top />
		<List />
	</div>
</template>

<script>
	import Top from "./sub/Top.vue";
	import List from "./sub/List.vue";
	export default {
		name: 'Sub',
		components: {
			Top, List
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.sub {
		display: flex;
		flex-flow: column;
		width: 320px;
		background: white;
		z-index:5;
		box-shadow: -6px 12px 12px rgba(0, 0, 0, 0.12);
	}
</style>
