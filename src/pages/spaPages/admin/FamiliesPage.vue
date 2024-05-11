<template>
  <div class="spa">
    <NavigationObj />
    <main><HeaderObj /> <FamiliesObj /></main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import FamiliesObj from "@/components/spaObjects/FamiliesObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    FamiliesObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
