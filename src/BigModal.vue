<template>
	<div class="modal">
		<div class="box">
			<button class="modal-close" @click="closeModal">
				<img src="/assets/close.svg">
			</button>
			
			<ShowPortfolio v-if="showPortfolioVisible" />
		</div>
	</div>
</template>

<script>
	import ShowPortfolio from "./bigmodal/ShowPortfolio.vue";
	
	export default {
		name: 'BigModal',
		components: {
			ShowPortfolio
		},
		computed: {
			showPortfolioVisible: function() {
				return this.$store.state.BigModal.showportfolio.visible;
			}
		},
		methods: {
			closeModal: function() {
				this.$store.commit("closeBigModal");
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.modal {
		z-index: 1000;
		width: 100vw;
		height: 100vh;
		top:0;
		left:0;
		background: rgba(0, 0, 0, 0.25);
		position: fixed;
		display: flex; 
		justify-content: center;
	}
	
	.box {
		position: relative;
		z-index: 1001;
		width: 1024px;
		background: white;
		box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.25);
		border-radius: 5px;
	}
	
	.modal-close {
		position: absolute;
		top:0;
		right:0;
		padding:  16px;
		border: none;
		background: none;
		cursor:pointer;
	}
	
	.modal-close:hover {
		border-bottom: 1px solid #eee;
	}
	
</style>
