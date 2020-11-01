<template>
  <img class="logo" alt="League of Legends logo" :src="filePath" />
</template>

<script>
export default {
  name: "ShowCaseLogo",
  props: {
    path: String
  },
  data() {
    return {
      filePath: this.path
    };
  }
};
</script>
