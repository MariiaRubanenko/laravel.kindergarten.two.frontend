<template>
  <div class="spa">
    <NavigationObj />
    <main><HeaderObj /> <StaffsObj /></main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import StaffsObj from "@/components/spaObjects/administration/StaffsObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    StaffsObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
