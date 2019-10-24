<template>
	<div class="toolbar">
		<button class="btn-addproject" @click="addProject">
			<img src="/assets/plus.svg">
			Project
		</button>
	</div>
</template>

<script>
	export default {
		name: 'Toolbar',
		methods: {
			addProject: function() {
				this.$store.commit("showModal", "addproject_one");
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.toolbar {
		z-index: 100;
		width: 64px;
		padding: 16px;
		background: white;
		box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
		position: absolute;
		left: 16px;
		top: 16px;
		display: flex;
		justify-content: center;
	}
	
	.btn-addproject {
		background: none;
		border: none;
		cursor: pointer;
		font-size: 12px;
	}
</style>
