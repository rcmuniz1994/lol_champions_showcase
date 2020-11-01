<template>
  <div id="app">
    <ShowCaseLogo :path="path" />
    <ShowcaseTitle msg="LoL Champions Showcase"/>
    <ShowCaseChampionsList />
  </div>
</template>

<script>
import ShowcaseTitle from './components/ShowCaseTitle.vue';
import ShowCaseLogo from './components/ShowCaseLogo.vue';
import ShowCaseChampionsList from './components/ShowCaseChampiosList.vue';
import logo from './assets/logo.png';


export default {
  name: 'App',
  components: {
    ShowcaseTitle,
    ShowCaseLogo,
    ShowCaseChampionsList
  },
  data () {
    return {
      path: logo
    }
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
