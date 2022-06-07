<script setup>
// import { computed } from 'vue';

// import { useStore } from './store/gvuex';

// let store = useStore()
// let count = computed(() => store.state.count)

// function add(){
//   store.commit('add')
// }


import { useCounterStore } from './store/count';
const store =useCounterStore()
function add(){
  store.add()
}

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- div标签渲染count并绑定点击函数 -->
  <div @click="add">{{store.count}}</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
