<template>
	<div class="header">
		<img class="logo" src="/assets/nf_logo.png">
		<Left />
		<Right />
	</div>
</template>

<script>
	import Left from "./header/Left.vue";
	import Right from "./header/Right.vue";

	export default {
		name: 'Header',
		components: {
			Left, Right
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header {
		display: flex;
		position: relative;
		z-index: 10;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
	}
	
	.logo {
		margin: 8px 16px;
		width: 48px;
		height: 48px;
	}
	
</style>
