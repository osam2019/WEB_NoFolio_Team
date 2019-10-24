<template>
	<div class="properties">
		<button class="propertybtn">
			<div v-if="width>950">
				파일
			</div>
			<div v-else>
				<img src="/assets/menu.svg">
			</div>
		</button>
		<button class="propertybtn">
			<div v-if="width>950">
				도움말	
			</div>
			<div v-else>
				<img src="/assets/help.svg">
			</div>
		</button>
		<span class="seperator">|</span>
		<button class="propertybtn">
			<img src="/assets/undo.svg">
		</button>
		<button class="propertybtn">
			<img src="/assets/redo.svg">
		</button>
		<button class="propertybtn">
			<img src="/assets/save.svg">
		</button>
		<button class="propertybtn">
			<img src="/assets/print.svg">
		</button>
		<span class="statemessage">
			변경사항이 모두 저장됨
		</span>
	</div>
</template>

<script>
	export default {
		name: 'Properties',
		data() {
			return {
				width:0
			}
		},
		created() {
			window.addEventListener('resize', this.handleResize)
			this.handleResize();
		},
		destroyed() {
			window.removeEventListener('resize', this.handleResize)
		},
		methods: {
			handleResize() {
				this.width = window.innerWidth;
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.properties {
		display: flex;
		align-items: center;
	}
	
	.propertybtn {
		border: none;
		background: none;
		font-size: 14px;
		cursor:pointer;
		color: #aaa;
		margin: 0 8px;
	}
	.seperator {
		color: #eee;
		margin: 0 16px;
	}

	.statemessage {
		color: #ccc;
		font-size: 12px;
		margin: 0 16px;
	}
</style>
