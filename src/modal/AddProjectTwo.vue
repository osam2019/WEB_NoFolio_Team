<template>
	<div class="addProjectTwo">
		<h3 class="title">
			프로젝트 추가
		</h3>
		<p calss="description">
			추가하고 싶은 프로젝트를 골라주세요.
		</p>
		<div class="searchbox">
			<input type="text" class="searchbox-input" v-model="project"><img src="/assets/search.svg" width="24" height="24">
		</div>
		<div class="repositories">
			<p class="repository" v-for="repos in repositories" @click="reposClick(repos)">{{repos.title}}</p>
		</div>
		<div class="bottom">
			<button class="prev" @click="prevStep">
				 &lt; 이전
			</button>
			<div class="steps">
				<div class="step-circle"/>
				<div class="step-circle step-circle-selected"/>
				<div class="step-circle"/>
			</div>
			<button class="next disabled" disabled>
				다음 &gt;
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AddProjectTwo',
		data: function() {
			return {
				reposes:[],
				account:"",
				project:""
			}
		},
		mounted(){
			this.account = this.$store.state.account;
			this.reposes = this.$store.state.Githubs;
		},
		computed: {
			repositories() {
				for (let i = 0; i < this.reposes.length; i++) {
					if (this.reposes[i].id === this.account){
						return this.reposes[i].repositories.filter(x => x.title.includes(this.project));
					}
				}
				
				return [];
			}
		},
		methods: {
			prevStep: function() {
				this.$store.commit("showModal", "addproject_one");
			},
			reposClick: function(r) {
				this.$store.state.project = r;
				this.$store.commit("showModal", "addproject_three");
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.addProjectTwo {
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
	
	.searchbox {
		display: flex;
		align-items: center;
		border: 1px solid #ccc;
		padding: 4px;
	}
	
	.searchbox-input {
		font-size: 12px;
		padding: 8px;
		border: none;
		margin-left: 4px;
		width: 360px;
		text-align: center;
	}
	
	.searchbox-input:focus {
		border: 2px solid rgb(52, 152, 219);
	}
	
	.repositories {
		margin: 4px;
		border: 1px solid #ccc;
		width: 398px;
		height: 360px;
		overflow: auto;
		margin-bottom: 16px;
	}
	
	.repository {
		font-size: 12px;
		color: #333;
		font-weight: bold;
		padding: 16px;
		margin: 0;
		cursor:pointer;
	}
	
	.repository:hover {
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
		cursor:default;
	}
	
</style>
