<template>
	<div class="addProjectThree">
		<h3 class="title">
			프로젝트 추가
		</h3>
		<p calss="description">
			양식을 선택해주세요.
		</p>
		<div class="templates">
			<div class="template" v-for="template in templates" @click="templateClick(template)">
				<img class="templatePic" :src="template.thumbnail">
				<div class="templateTextbox">
					<h3 class="templateTitle">{{template.title}}</h3>
					<p class="templateContent">
						{{template.description}}
					</p>
				</div>
			</div>
		</div>
		<div class="bottom">
			<button class="prev" @click="prevStep">
				 &lt; 이전
			</button>
			<div class="steps">
				<div class="step-circle"/>
				<div class="step-circle"/>
				<div class="step-circle step-circle-selected"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AddProjectThree',
		computed: {
			templates: function() {
				return this.$store.state.Templates;
			}
		},
		methods: {
			prevStep: function() {
				this.$store.commit("showModal", "addproject_two");
			},
			templateClick: function() {
				if (this.$store.state.account != "" && this.$store.state.project != "") {
					this.$store.dispatch("createProject", this.$store.state.project);
				}
				this.$store.commit("closeModal");
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.addProjectThree {
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	
	.title {
		color: rgb(52, 152, 219);
		font-size: 24px;
	}
	
	.description {
		font-size: 16px;
	}
	
	.templates {
		margin: 4px;
		border: 1px solid #ccc;
		width: 398px;
		height: 360px;
		overflow: auto;
		margin-bottom: 16px;
	}
	
	.template {
		display: flex;
		padding: 16px;
		margin: 0;
		cursor:pointer;
		border-bottom: 1px solid #ccc;
	}
	
	.templatePic {
		width: 128px;
	}
	
	.templateTextbox {
		flex:1;
		text-align: center;
	}
	
	.templateTitle {
		font-size: 16px;
		font-weight: bold;
	}
	
	.templateContent {
		font-size: 12px;
		color: #333;
	}
	
	.template:hover {
		background: rgb(52, 152, 219);
	}
	
	.bottom {
		display: flex;
		width: 100%;
	}
	
	.steps {
		display: flex;
		flex: 1;
		justify-content: center;
	}
	
	.step-circle {
		border-radius: 8px;
		width: 8px;
		height: 8px;
		margin: 8px;
		background: #ccc;
	}
	
	.step-circle-selected {
		background: rgb(52, 152, 219);
	}
	
	.prev {
		position: absolute;
		left:0;
		bottom:0;
		background: none;
		border: none;
		color: rgb(52, 152, 219);
		font-weight: bold;
		padding: 8px 16px;
		font-size: 16px;
		cursor:pointer;
	}
	
	.complete {
		color: rgb(52, 152, 52);
		position: absolute;
		right:0;
		bottom:0;
		padding: 8px 16px;
		font-weight: bold;
		border: none;
		font-size: 16px;
		background:none;
		cursor:pointer;
	}
	
	.next {
		position: absolute;
		right: 0;
		bottom: 0;
		background: none;
		border: none;
		color: rgb(52, 152, 219);
		font-weight: bold;
		padding: 8px 16px;
		font-size: 16px;
		cursor:pointer;
	}
	
	.disabled {
		color: #ccc;
		font-weight: normal;
	}
	
</style>
