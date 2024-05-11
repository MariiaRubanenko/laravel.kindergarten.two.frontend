<template>
  <div class="spa">
    <NavigationObj />
    <main>
      <HeaderObj />
    </main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
