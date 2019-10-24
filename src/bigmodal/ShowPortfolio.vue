<template>
	<div class="showPortfolio">
		<Introduce :portfolio="getSelectedPortfolio" />
		<h3 class="title">
				Projects
		</h3>
		<ProjectThemeOne 
			class="project" 
			v-for="(project, i) in getProjects" 
			:title="project.title" 
			:summary="project.summary" 
			:skills="project.skills" 
			:learned="project.learned"
			:used_languages="project.used_languages"
			:quality="project.quality"
			:key="i"
		/> 
	</div>
</template>

<script>
	import Introduce from "./showportfolio/Introduce.vue";
	import ProjectThemeOne from "./showportfolio/ProjectThemeOne.vue";
	
	export default {
		name: 'ShowPortfolio',
		components: {
			Introduce, ProjectThemeOne
		},
		computed: {
			getProjects() {
				return this.$store.state.BigModal.showportfolio.data.Projects;
			},
			getSelectedPortfolio() {
				return this.$store.state.BigModal.showportfolio.data;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.showPortfolio {
		height: 100%;
		overflow: auto;
		background-color:white;
	}
	
	.information{
		flex:1;
		background-color:red;
	}
	
	.portfolio{
		width:320px;
	}
	.title {
		border-bottom: 1px solid #ccc;
		padding: 32px;
		font-size: 18px;
		margin-top: 64px;
		background: rgb(52, 152, 219);
		color: white;
	}
	
	.project {
		border-bottom: 32px solid rgb(52, 152, 219);
		margin: 64px 0;
	}
	
</style>