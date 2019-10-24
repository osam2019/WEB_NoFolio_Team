<template>
  <div id="app">
    <Modal v-show="modalVisible" />
	<BigModal v-show="bigModalVisible" />
    <router-view></router-view>
  </div>
</template>

<script>
	
import Modal from "./Modal.vue";
import BigModal from "./BigModal.vue";
	
export default {
  name: 'app',
  components: {
	  Modal, BigModal
  },
  computed: {
	  modalVisible: function() {
		  return this.$store.state.Modal.visible;
	  },
	  bigModalVisible: function() {
		  return this.$store.state.BigModal.visible;
	  }
  }
}
</script>

<style>
	* {
		box-sizing: border-box;
	}
	
	body {
		margin: 0;
		padding: 0;
	}

	.router-link-active {
		color: rgb(52,152,219);
		text-decoration: none;
		border:none;
	}

	.router-link-exact-active {
		color: rgb(52,152,219);
		text-decoration: none;
		border:none;
	}
	
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin:0;
  padding: 0;
}
	
/* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(52, 152, 219); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 100, 156); 
}
	
</style>
