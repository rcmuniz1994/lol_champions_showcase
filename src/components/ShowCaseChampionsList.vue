<template>
  <b-container class="pt-5">
    <b-row>
      <b-input
        v-model.trim="championsCriteria"
        placeholder="Champion's name..."
      ></b-input>
    </b-row>
    <b-row class="pt-5" cols="6">
      <b-col
        class="list-item"
        v-for="champion in filteredChampions"
        :key="champion.id"
      >
        <ShowCaseChampionsImage
          :championName="champion.name"
          :fileName="champion.image.full"
        />
        <strong>{{ champion.name }}</strong>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ShowCaseChampionsImage from "./ShowCaseChampionImage.vue";

export default {
  name: "ShowCaseChampionsList",
  components: {
    ShowCaseChampionsImage
  },
  data() {
    return {
      championsCriteria: ""
    };
  },
  computed: {
    ...mapGetters(["champions"]),
    filteredChampions() {
      return this.champions.filter(champion =>
        champion.name
          .toLowerCase()
          .includes(this.championsCriteria.toLowerCase())
      );
    }
  },
  methods: {
    ...mapActions(["retrieveChampions"])
  },
  created() {
    this.retrieveChampions();
  }
};
</script>

<style scoped>
.list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style-type: none;
}
</style>
