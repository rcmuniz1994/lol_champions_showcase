<template>
  <img class="logo" alt="League of Legends logo" src="./assets/logo.png">
  <ShowcaseTitle msg="LoL Champions Showcase"/>
</template>

<script>
import ShowcaseTitle from './components/ShowCaseTitle.vue';

export default {
  name: 'App',
  components: {
    ShowcaseTitle
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

.logo {
  height: 128px;
  width: 128px;
}
</style>
