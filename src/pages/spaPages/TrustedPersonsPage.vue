<template>
  <div class="spa">
    <NavigationObj />
    <main><HeaderObj /> <TrustedPersonsObj /></main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import TrustedPersonsObj from "@/components/spaObjects/TrustedPersonsObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    TrustedPersonsObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
