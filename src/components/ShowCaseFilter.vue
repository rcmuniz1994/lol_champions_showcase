<template>
  <div>
    <p>{{ championsCriteria }}</p>
    <b-input
      :value="championsCriteria"
      @input="setCriteria"
      placeholder="Insert a champion's name"
    ></b-input>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ShowCaseFilter",
  computed: {
    ...mapState({
      championsCriteria: state => state.obj.championsCriteria
    })
  },
  methods: {
    ...mapActions(["setChampionsCriteria"]),
    setCriteria(event) {
      this.setChampionsCriteria(event.target.value.trim());
    }
  }
};
</script>
