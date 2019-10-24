<template>
	<div class="introduce">
		<div class="introduce-1">
			<ImageUploader/>
			<div class="box-introduce">
				<h3 class="box-introduce-title">
					Introduce yourself
				</h3>
				<p class="box-introduce-content">
					{{boxIntroduceContent}}
				</p>
			</div>
		</div>
		<div class="introduce-2">
			<div class="introduce-2-box">
				<h3 class="introduce-2-box-title">
					Profiles
				</h3>
				<div class="introduce-2-box-items">
					<p><b>Name</b><span class="introduce-2-box-item-content">{{profile.name}}</span></p>
					<p><b>Birth</b><span class="introduce-2-box-item-content" >{{profile.birth}}</span></p>
					<p><b>Email</b><span class="introduce-2-box-item-content" >{{profile.email}}</span></p>
					<p><b>GitHub</b><span class="introduce-2-box-item-content">{{profile.github}}</span></p>
				</div>
			</div>
			<div class="introduce-2-box">
				<h3 class="introduce-2-box-title">
					Acheivements
				</h3>
				<div class="introduce-2-box-items">
					<p class="introduce-2-box-item" v-for="(acheivement, i) in acheivements">
						{{acheivement}}
					</p>
				</div>
			</div>
			<div class="introduce-2-box">
				<h3 class="introduce-2-box-title">
					Careers
				</h3>
				<div class="introduce-2-box-items">
					<p class="introduce-2-box-item" v-for="(career, i) in careers">
						{{career}}
					</p>
				</div>
			</div>
		</div>
		<div class="introduce-3">
			<h3 class="introduce-3-title">
				Skills
			</h3>
			<div class="introduce-3-content">
				<div class="introduce-3-content-box">
					<h3 class="introduce-3-content-box-title">
						사용 언어
					</h3>
					<p class="introduce-3-content-box-tip">
						※ github를 분석해 자동으로 만들어집니다.
					</p>
					<DoughnutChart class="doughnutchart" :languages="skills.used_languages"></DoughnutChart>
				</div>
				<div class="introduce-3-content-box">
					<h3 class="introduce-3-content-box-title">
						대표 사용 프레임워크
					</h3>
					<p class="introduce-3-content-box-item"
					   v-for="framework in skills.used_frameworks">
						{{framework.title}} {{framework.version}}
					</p>
					<h3 class="introduce-3-content-box-title">
						대표 사용 툴
					</h3>
					<p class="introduce-3-content-box-item" 
					   v-for="tool in skills.used_tools">
						{{tool}}
					</p>
				</div>
				<div class="introduce-3-content-box">
					<h3 class="introduce-3-content-box-title">
						품질
					</h3>
					<p class="introduce-3-content-box-tip">
						※ github를 분석해 자동으로 만들어집니다.
					</p>
					<RadarChart class="radarchart" :quality="this.getQuality"></RadarChart>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ImageUploader from "./introduce/ImageUploader.vue";
	import DoughnutChart from "./introduce/DoughnutChart.vue";
	import RadarChart from "./introduce/RadarChart.vue";
	
	export default {
		name: 'Page',
		data() {
			return {
			}
		},
		props:["portfolio"],
		computed: {
			achievementVisible: function() {
				return this.$store.state.Acheivements.add_visible;
			},
			careerVisible: function() {
				return this.$store.state.Careers.add_visible;
			},
			profile: function() {
				return this.portfolio.User.profile;	
			},
			boxIntroduceContent: function() {
				return this.portfolio.User.introduce;
			},
			acheivements: function() {
				return this.portfolio.User.acheivements;
			},
			careers: function() {
				return this.portfolio.User.careers;
			},
			skills: function() {
				return this.portfolio.User.skills;
			},
			projects: function() {
				return this.portfolio.Projects;
			},
			chartdata: function() {
				
			},
			options: function() {
				
			},
			getQuality: function() {
				let length = this.projects.length;
				
				if (length == 0) {
					return {
						dry: 0,
						coupling: 0,
						cohension: 0,
						standard: 0,
						complexity: 0
					}	
				}
				
				let dry = 0;
				let coupling = 0;
				let cohension = 0;
				let standard = 0;
				let complexity = 0;
				
				for (let project of this.projects) {
					dry += project.quality.dry;
					coupling += project.quality.coupling;
					cohension += project.quality.cohension;
					standard += project.quality.standard;
					complexity += project.quality.complexity;
				}
				
				return {
					dry: dry/length,
					coupling: coupling/length,
					cohension: cohension/length,
					standard: standard/length,
					complexity: complexity/length
				}
			}
		},
		components: {
			ImageUploader, DoughnutChart, RadarChart
		},
		methods: {
			achievementMouseOver: function() {
				this.$store.commit("setAcheivementAddVisible", true);
			},
			achievementMouseLeave: function() {
				this.$store.commit("setAcheivementAddVisible", false);
			},
			addAcheivement: function() {
				this.$store.state.User.acheivements.push("");
			},
			careerMouseOver: function() {
				this.$store.commit("setCareerAddVisible", true);
			},
			careerMouseLeave: function() {
				this.$store.commit("setCareerAddVisible", false);
			},
			addCareer: function() {
				this.$store.state.User.careers.push("");
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.introduce {
		width: 100%;
	}
	
	.editable {
		border: none;
		background: none;
		font-size: 16px;
		color: #666;
	}
	
	.editable_multiline {
		border: none;
		width: 100%;
		height:100px;
		overflow:hidden;
		font-size: 16px;
		color: #666;
	}
	
	.introduce-1 {
		display: flex;
		position: relative;
		margin: 32px;
	}
	
	.profile {
		width: 128px;
		height: 172px;
		border: 4px solid #eee;
	}
	
	.box-introduce {
		padding-left: 32px;
		width: calc(100% - 112px);
		height: 172px;
		
	}
	
	.box-introduce-title {
		font-size: 18px;
		margin:0;
		margin-top: 72px;
		
		padding: 0;
	}
	
	.box-introduce-content {
		margin: 0;
		width: 100%;
		word-break: break-word;
		font-size: 16px;
		padding: 8px;
		color: #666;
	}
	
	.introduce-2 {
		display: flex;
		position: relative;
	}
	
	.introduce-2-box {
		flex:1;
		padding: 16px;
	}
	
	.introduce-2-box-title {
		border-bottom: 1px solid #ccc;
		padding: 8px;
		font-size: 18px;
		margin:0;
	}
	
	.introduce-2-box-items {
		font-size: 16px;
		color: #333;
		padding: 8px;
		margin: 0;
	}
	
	.introduce-2-box-item {
		font-size: 16px;
		color: #666;
		
	}
	
	.introduce-2-box-item-content {
		float: right;
		color: #666;
		width: 168px;
		font-size: 16px;
	}
	
	.introduce-3 {
		position: relative;
		padding: 16px;
	}
	
	.introduce-3-title {
		border-bottom: 1px solid #ccc;
		padding: 8px;
		font-size: 14px;
		margin:0;
	}
	
	.introduce-3-content {
		display: flex;
	}
	
	.introduce-3-content-box {
		display: flex;
		flex-flow: column;
		align-items: center;
		flex: 1;
		margin-top: 24px;
		width: 50%;
	}
	
	.introduce-3-content-box-title {
		font-size: 16px;
		font-weight: bold;
		margin: 0;
		padding: 8px;
	}
	
	.introduce-3-content-box-tip {
		color: #aaa;
		font-size: 16px;
		margin:0;
	}
	
	.introduce-3-content-box-item {
		padding: 4px 16px;
		font-size: 16px;
		color: #666;
		margin: 0;
	}
	.btn-add {
		background: none;
		border: none;
		font-weight: bold;
		width: 100%;
		text-align: center;
		border-top: 1px solid #eee;
		box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.30);
	}
	.doughnutchart {
		margin-top: 32px;
		width: 240px;
	}
	.radarchart {
		width: 300px;
	}
</style>
