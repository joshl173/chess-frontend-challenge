<template>
    <div class="sidebar">
        <ul>
        <li v-for="(square, index) in clickedSquares" :key="index">{{ getChessCoordinates(square.row, square.col) }}</li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'Side-bar',

    props: {
        selectedSquare: Object,
    },
    data() {
        return {
            clickedSquares: [],
        };
    },
    watch: {
        selectedSquare(newValue) {
            if(newValue) {
                this.clickedSquares.push(newValue);
            }

        },
    },
    methods: {
        getChessCoordinates(row, col) {
            const files = [null, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            const file = files[col];
            const rank = 9 - row;
            return file + rank;
        }
    }
};
</script>
  
<style scoped src="./Sidebar.css"></style>