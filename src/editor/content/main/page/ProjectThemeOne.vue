<template>
	<div class="pto">
		<div class="centerbox">
			<h3 class="project-name">
				{{title}}
			</h3>
		</div>
		<div class="halfbox">
			<div class="halfbox-inner">
				<h3 class="item-title">
					프로젝트 개요 및 나의 담당
				</h3>
				<p class="item-content">
					{{summary}}
				</p>
			</div>
			<div class="halfbox-inner halfbox-graph">
				<p class="item-tip">
					※ github를 분석해 자동으로 만들어집니다.
				</p>
				<RadarChart class="radarchart" :quality="quality"></RadarChart>
			</div>
		</div>
		<div class="halfbox">
			<div class="halfbox-inner">
				<h3 class="item-title">
					사용 언어 및 기술
				</h3>
				<p class="item-content">
					{{skills}}
				</p>
			</div>
			<div class="halfbox-inner">
				<h3 class="item-title">
					배운점
				</h3>
				<p class="item-content">
					{{learned}}
				</p>
			</div>
		</div>
		<div class="centerbox">
			<img class="ic_lang" v-for="lang in getTop3Langs" :src="lang">
		</div>
	</div>
</template>

<script>
	import RadarChart from "./projecttheme/RadarChart.vue";
	export default {
		name: 'ProjectThemeOne',
		props: ['title', 'thumbnail', 'summary', 'skills', 'learned', 'used_languages', 'quality'],
		components: {
			RadarChart
		},
		computed: {
			getTop3Langs: function() {
				let top3Langs = this.used_languages.
									sort(function(a, b) {
										return b.used - a.used
									}).slice(0, 3);
				
				let result = [];
				
				for (let lang of top3Langs) {
					let langImg = "/assets/lang_icons/" + lang.value + "_lang.svg";
					result.push(langImg);
				}
				
				return result;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.pto {
		width: 100%;
	}
	div, h3, p {
		margin: 0;
	}
	
	
	.centerbox {
		display: flex;
		justify-content: center;
	}
	
	.halfbox {
		display: flex;
	}
	
	.halfbox-inner {
		flex: 1;
		margin: 16px;
	}
	
	.ic_lang {
		width: 96px;
		height: 96px;
		margin: 32px;
	}
	
	.project-name {
		font-size: 32px;
	}
	
	.item-title {
		font-size: 14px;
		padding: 16px;
		border-bottom: 1px solid rgb(243, 156, 18);
	}
	
	.item-content {
		font-size: 12px;
		padding: 8px;
	}
	
	.item-tip {
		font-size: 12px;
		color: #ccc;
		margin-top: 64px;
	}
	
	.halfbox-graph {
		display: flex;
		flex-flow: column;
		align-items: center;
		justify-content: center;
		margin:0;
	}
	
	.radarchart {
		width: 240px;
	}
</style>
