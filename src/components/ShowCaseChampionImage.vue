<template>
  <img class="logo" :alt="alt" :src="path" />
</template>

<script>
export default {
  name: "ShowCaseChampionImage",
  props: {
    championName: String,
    fileName: String
  },
  data() {
    return {
      path: `http://ddragon.leagueoflegends.com/cdn/10.22.1/img/champion/${this.fileName}`,
      alt: `${this.championName} image`
    };
  }
};
</script>
