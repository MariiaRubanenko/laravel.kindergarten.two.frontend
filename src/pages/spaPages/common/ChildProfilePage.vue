<template>
  <div class="spa">
    <NavigationObj />
    <main>
      <HeaderObj />
      <ChildProfileObj />
    </main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import ChildProfileObj from "@/components/spaObjects/profiles/ChildProfileObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    ChildProfileObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
