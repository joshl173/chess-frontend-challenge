<template>
    <div class="chessboard">
        <div v-for="row in 8" :key="row" class="chessboard-row">
            <div 
            v-for="col in 8" 
            :key="col" 
            :class="getSquareClass(row, col)" 
            @click="()=> toggleHighlight(row, col)"></div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "chess-board",

    data() {
    return {
      highlightedSquares: [],
    };
  },
  methods: {
    getSquareClass(row, col) {
      return {
        'white': (row + col) % 2 === 0,
        'black': (row + col) % 2 !== 0,
        'highlighted': this.isSquareHighlighted(row, col),
      };
    },
    isSquareHighlighted(row, col) {
      return this.highlightedSquares.some(
        square => square[0] === row && square[1] === col
      );
    },
    toggleHighlight(row, col) {
      this.highlightedSquares = [[row, col]];
      console.log('Clicked Square:', row, col);
      this.$emit('update-sidebar', {row, col});
    },
  },
};
</script>
  
<style scoped src="./Chessboard.css"></style>