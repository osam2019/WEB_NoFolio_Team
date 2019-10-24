<template>
	<div class="right">
		<button class="btn el-button" v-if="!isLogined" @click="login">
			로그인
		</button>
		<button class="btn el-button" v-else @click="logout">
			로그아웃	
		</button>
		<Properties />
	</div>
</template>

<script>
	import Properties from "./right/Properties.vue";
	import { MessageBox } from 'element-ui';
	
	export default {
		name: 'Right',
		components: {
			Properties
		},
		computed: {
			isLogined(){
				return this.$store.state.User.logined;
			}
		},
		methods: {
			login(){
				MessageBox({
					  title: '로그인',
					  message: '구글 로그인',
					  type: 'success',
					  showCancelButton: true
					}, action => {
						if (action == "confirm") {
							this.$store.commit("login");
							
							this.refreshFolio();
						}
					});
			},
			logout(){
				this.$store.commit("logout");		
				this.$store.commit("clearProfile");
			},
			refreshFolio(){
				MessageBox({
					  title: '기존 데이터가 존재합니다.',
					  message: '기존 데이터를 불러오시겠습니까?',
					  type: 'warning',
					  showCancelButton: true
					}, action => {
						if (action == "confirm") {
							this.$store.dispatch("loadProfile");
						}
					});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.right {
		flex: 1 auto;
		display: flex;
		flex-flow: row-reverse;
		margin-right: 32px;
		align-items: center;
	}

	.btn {
		margin-left: 8px;
	}

	.profilebtn {
		background: skyblue;
		color: white;
	}
</style>
