<template>
	<div class="properties">
		<router-link class="propertybtn propertybtn-selected" to="/editor">에디터</router-link>
		<span class="seperator">|</span>
		<router-link to="/dashboard" class="propertybtn">대시보드</router-link>
	</div>
</template>

<script>
	export default {
		name: 'Properties'
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
		font-size: 16px;
		cursor:pointer;
		color: grey;
		margin: 0 8px;
		text-decoration: none;
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
