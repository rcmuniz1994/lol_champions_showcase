<template>
  <b-container class="pt-5">
    <b-row cols="6">
      <b-col
        class="list-item"
        v-for="champion in $store.state.champions"
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
import { mapActions } from "vuex";
import ShowCaseChampionsImage from "./ShowCaseChampionImage.vue";

export default {
  name: "ShowCaseChampionsList",
  components: {
    ShowCaseChampionsImage
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
