<template>
<div>
	<div class="searchbar">
		<div class="title">언어선택</div>
		<el-select v-model="selected_languages" v-on:change="onChange" multiple placeholder="Languages.." style="width: auto; margin-left: 8px;">
			<el-option
				v-for="item in languages"
				:key="item.value"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
	<!--
		<span class="seperator">|</span>
		<div class="title">키워드로 검색(검색)</div>
		
		<el-select v-model="selected_search_options" placeholder="Option.." style="width: auto; margin-left: 8px;">
			<el-option
				v-for="item2 in options"
				:key="item2.value"
				:label="item2.label"
				:value="item2.value">
			</el-option>
		</el-select>
	-->
	</div>
</div>
</template>

<script>
	export default {
		name: 'searchbar',
		data() {
			return {
				languages: [{
					value: 'Js',
					label: 'Js'
				}, {
					value: 'NodeJs',
					label: 'NodeJs'
				},	{
					value: 'Python',
					label: 'Python'
				}, {
					value: 'Java',
					label: 'Java'
				}, {
					value: 'C++',
					label: 'C++'
				}, {
					value: 'C#',
					label: 'C#'
				}, {
					value: 'CSS',
					label: 'CSS'
				}, {
					value: 'Html',
					label: 'Html'
				}],
				selected_languages: this.$store.state.selected_languages,
				
				options: [{
					value: 'name',
					label: 'name'
				}, {
					value: 'keyword',
					label: 'keyword'
				}],
				
				selected_search_options:''
			}
		},
		methods:{
			onChange(){
				this.$store.state.selected_languages = this.selected_languages;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.searchbar{
		display:flex;
		height:64px;
		width:100%;
		padding-left:24px;
		border-top: 1px solid #aaa;
		border-bottom: 1px solid #aaa;
		box-shadow:0 4px 2px -2px rgba(0,0,0,0.12);
		align-items:center;
	}
	.title{
		font-size: 16px;
		font-weight: bold;
	}
	.selected-languages{
		margin: 0 8px;
	}
	.seperator{
		margin: 0 8px;
		color: #aaa;
	}
</style>
