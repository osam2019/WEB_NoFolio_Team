<template>
	<div class="left">
		<input type="text" class="title" v-model="getFolioTitle">
		<Properties />
	</div>
</template>

<script>
	import Properties from "./left/Properties.vue";

	export default {
		name: 'Left',
		components: {
			Properties
		},
		computed:{
			getFolioTitle(){
				return this.$store.state.User.title;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.left {
		display: flex;
		flex-flow: column;
		margin-left: 16px;
		justify-content: flex-end;
	}
	
	.title {
		width: 320px;
		border: none;
		background: none;
		font-size: 16px;
		font-weight: bold;
		padding: 8px;
	}
	
	.title:hover {
		border-bottom: 1px solid #ccc;
	}
</style>
