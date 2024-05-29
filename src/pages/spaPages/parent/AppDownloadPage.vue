<template>
  <div class="spa">
    <NavigationObj />
    <main>
      <HeaderObj />
      <AppDownloadObj />
    </main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import AppDownloadObj from "@/components/spaObjects/AppDownloadObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    AppDownloadObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
