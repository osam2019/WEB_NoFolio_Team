<template>
	<div class="modal">
		<div class="box">
			<button class="modal-close" @click="closeModal">
				<img src="/assets/close.svg">
			</button>
			
			<AddProjectOne v-if="addProjectOneVisible" />
			<AddProjectTwo v-if="addProjectTwoVisible" />
			<AddProjectThree v-if="addProjectThreeVisible" />
		</div>
	</div>
</template>

<script>
	import AddProjectOne from "./modal/AddProjectOne.vue";
	import AddProjectTwo from "./modal/AddProjectTwo.vue";
	import AddProjectThree from "./modal/AddProjectThree.vue";
	
	export default {
		name: 'Modal',
		components: {
			AddProjectOne, AddProjectTwo, AddProjectThree
		},
		computed: {
			addProjectOneVisible: function() {
				return this.$store.state.Modal.addproject_one.visible;
			},
			addProjectTwoVisible: function() {
				return this.$store.state.Modal.addproject_two.visible;
			},
			addProjectThreeVisible: function() {
				return this.$store.state.Modal.addproject_three.visible;
			}
		},
		methods: {
			closeModal: function() {
				this.$store.commit("closeModal");
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
		align-items: center;
	}
	
	.box {
		position: relative;
		z-index: 1001;
		width: 640px;
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
