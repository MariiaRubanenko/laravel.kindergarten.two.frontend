<template>
  <div class="spa">
    <NavigationObj />
    <main><HeaderObj /> <StaffProfileObj /></main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import StaffProfileObj from "@/components/spaObjects/StaffProfileObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    StaffProfileObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
