<template>
	<div class="header">
		<img class="logo" src="/assets/nf_logo_beta.svg">
		<div class="right">
			<button class="btn el-button" v-if="!isLogined" @click="login">
				로그인
			</button>
			<button class="btn el-button" v-else @click="logout">
				로그아웃	
			</button>
			<div class="properties">
				<router-link to="/editor">
					<button class="propertybtn">에디터</button>
				</router-link>
				<span class="seperator">|</span>
				<router-link to="/dashboard">
					<button class="propertybtn propertybtn-selected">대시보드</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import { MessageBox } from 'element-ui';
	export default {
		name: 'Header',
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
							this.$store.dispatch("loadProfile");
						}
					});
			},
			logout(){
				this.$store.commit("logout");		
				this.$store.commit("clearProfile");
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header{
		display:flex;
		position:relative;
		justify-content:space-between;
		align-items:center;
	}
	
	.logo {
		margin: 8px 16px;
		height: 48px;
	}
	
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
	
	.properties {
		display: flex;
		align-items: center;
	}
	
	.propertybtn {
		border: none;
		background: none;
		font-size: 16px;
		cursor:pointer;
		color: grey;
		margin: 0 8px;
	}
	
	.propertybtn-selected {
		color: rgb(52, 152, 219);
		font-weight: bold;
		border-bottom: 2px solid rgb(52, 152, 219);
		padding: 8px;
	}
	
	.seperator {
		color: #ccc;
		margin: 0 16px;
	}
</style>
