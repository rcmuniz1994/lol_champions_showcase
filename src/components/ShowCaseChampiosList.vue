<template>
  <ul>
    <li v-for="champion in $store.state.champions" :key="champion">
      {{champion}}
      </li>
  </ul>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: "ShowCaseChampionsList",
    methods: {
      ...mapActions([
        'retrieveChampions'
      ])
    },
    created () {
      this.retrieveChampions();
    }
  }
</script>