<template>
	<div class="list">
		<div class="item">
			Introduce
		</div>
		<div class="item" v-for="(project, i) in projects" @click="scrollPageTo(i)">
			{{project.title}}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'List',
		computed: {
			projects: function() {
				return this.$store.state.Projects;
			}
		},
		methods: {
			scrollPageTo(i) {
				this.$store.commit("scrollPageTo", i);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.list {
		width: 320px;
		flex: 1;
		height: calc(100vh - 112px);
		overflow-x: hidden;
		overflow-y: auto;
		min-height: 0px;
	}
	
	.item {
		padding: 16px;
		font-size: 16px;
		color: grey;
		width: 288px;
		word-break: break-word;
	}
	
	.item:hover {
		background: #eee;
	}
</style>
