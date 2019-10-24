<template>
	<div id="main">
		<Header />
		<Content />
	</div>
</template>

<script>
	import Header from './Header.vue'
	import Content from './Content.vue'

	export default {
		name: 'main',
		components: {
			Header, Content
		}
	}
</script>