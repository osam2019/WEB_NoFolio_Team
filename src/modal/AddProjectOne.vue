<template>
	<div class="addProjectOne">
		<h3 class="title">
			프로젝트 추가
		</h3>
		<p calss="description">
			본인의 github 유저 이름을 입력해주세요.
		</p>
		<div class="input-github">
			<img src="/assets/ic_github.svg" width="24" height="24"><input type="text" class="input-github-username" placeholder="예) s0metimes" v-model="account">
		</div>
		<div class="bottom">
			<button class="prev disabled" disabled>
				 &lt; 이전
			</button>
			<div class="steps">
				<div class="step-circle step-circle-selected"/>
				<div class="step-circle"/>
				<div class="step-circle"/>
			</div>
			<button class="next" @click="nextStep">
				다음 &gt;
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'AddProjectOne',
		data: function() {
			return {
				account: ""
			}
		},
		methods: {
			nextStep: function() {
				if (this.account != "") {
					this.$store.state.account = this.account;
					this.$store.commit("showModal", "addproject_two");
				}
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.addProjectOne {
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
	
	.input-github {
		display: flex;
		align-items: center;
		border: 1px solid #ccc;
		padding: 4px;
		margin-bottom: 128px;
	}
	
	.input-github-username:focus {
		border: 2px solid rgb(52, 152, 219);
	}
	
	.input-github-username {
		font-size: 12px;
		padding: 8px;
		border: none;
		margin-left: 4px;
		width: 360px;
		text-align: center;
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
	}
	
	.disabled {
		color: #ccc;
		font-weight: normal;
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
	
	
</style>
