<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <index msg="Webpage Initiated"/>
</template>

<script>
import index from './components/home-page.vue'

export default {
  name: 'App',
  components: {
    index
  }
}
</script>

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
