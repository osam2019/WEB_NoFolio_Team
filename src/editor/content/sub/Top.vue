<template>
	<div class="top">
		<img class="ic-menubook" src="/assets/menubook.svg">
		<h3 class="title">목차</h3>
		<button class="hide" @click="hide">숨기기</button>
	</div>
</template>

<script>
	export default {
		name: 'Top',
		methods: {
			hide: function() {
				this.$store.commit('setMenubookVisible', false);
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.top {
		display: flex;
		position: relative;
		height: 48px;
		border-bottom: 1px solid #eee;
		align-items: center;
	}
	
	.ic-menubook {
		padding: 0 16px;
	}
	
	.title {
		font-size: 16px;
		color: grey;
		font-weight: bold;
	}
	
	.hide {
		background: none;
		border: none;
		color: #ccc;
		position: absolute;
		top: 4px;
		right: 4px;
		font-size: 12px;
		cursor: pointer;
	}
</style>
