<template>
  <div class="spa">
    <NavigationObj />
    <main>
      <HeaderObj />
      <StaffsOfGroupObj />
    </main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import StaffsOfGroupObj from "@/components/spaObjects/StaffsOfGroupObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    StaffsOfGroupObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
