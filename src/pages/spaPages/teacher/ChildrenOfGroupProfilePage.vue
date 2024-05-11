<template>
  <div class="spa">
    <NavigationObj />
    <main>
      <HeaderObj />
      <ChildrenOfGroupObj />
    </main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";

import ChildrenOfGroupObj from "@/components/spaObjects/ChildrenOfGroupObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    ChildrenOfGroupObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
