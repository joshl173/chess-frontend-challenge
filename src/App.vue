<template>
  <div class="container">
    <Chessboard @update-sidebar="updateSidebar" />
    <Sidebar :selectedSquare="selectedSquare"/>
  </div>
</template>

<script>
import Chessboard from './components/Chessboard.vue';
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Chessboard,
    Sidebar,
  },

  data() {
    return {
    selectedSquare: null,
  };
},

methods: {
  updateSidebar(square) {
    this.selectedSquare = square;
  },
},
};
</script>

<style scoped src="./components/App.css"></style>