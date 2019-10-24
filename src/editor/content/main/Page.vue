<template>
	<div class="page">
		<Introduce />
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
			ref="projects"
			/>
	</div>
</template>

<script>
	import Introduce from "./page/Introduce.vue";
	import ProjectThemeOne from  "./page/ProjectThemeOne.vue";
	
	export default {
		name: 'Page',
		components: {
			Introduce, ProjectThemeOne
		},
		mounted() {
				
		},
		computed: {
			getProjects() {
				return this.$store.state.Projects;
			},
			scrollTo() {
				return this.$store.state.Page.scrollTo;
			}
		},
		watch: {
			scrollTo: function(i) {
				this.$parent.$el.scrollTop = this.$refs.projects[i].$el.offsetTop - this.$refs.projects[i].$el.offsetHeight/2;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.page {
		z-index: 5;
		width: 720px;
		min-width: 720px;
		min-height: 960px;
		height: fit-content;
		background: white;
		box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
	}
	
	.title {
		border-bottom: 1px solid #ccc;
		padding: 16px;
		font-size: 14px;
		margin-top: 64px;
		background: rgb(52, 152, 219);
		color: white;
	}
	
	.project {
		border-bottom: 32px solid rgb(52, 152, 219);
		margin: 32px 0;
	}
</style>
