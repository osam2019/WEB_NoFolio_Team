<template>
	<div class="sub-hidden">
		<img class="ic-menubook" src="/assets/menubook.svg" @click="show">
	</div>
</template>

<script>
	export default {
		name: 'SubHidden',
		methods: {
			show: function() {
				this.$store.commit('setMenubookVisible', true);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.sub-hidden {
		position: absolute;
		top: 32px;
		right: 32px;
	}
	
	.sub-hidden:hover {
		background: white;
		z-index:5;
		box-shadow: -6px 12px 12px rgba(0, 0, 0, 0.12);
	}
	
	.ic-menubook {
		cursor: pointer;
	}
</style>
