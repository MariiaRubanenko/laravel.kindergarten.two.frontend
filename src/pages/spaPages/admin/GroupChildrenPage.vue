<template>
  <div class="spa">
    <NavigationObj />
    <main>
      <HeaderObj />
      <div class="d-lg-flex justify-content-center">
        <div class="col-lg-5 mb-5 mr-lg-5 mb-lg-0 mr-lg-3 fullscreen-container">
          <ChildrenOfGroupObj />
        </div>
        <div class="col-lg-5 fullscreen-container">
          <ChildrenWithoutGroupObj />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import ChildrenOfGroupObj from "@/components/spaObjects/ChildrenOfGroupObj.vue";
import ChildrenWithoutGroupObj from "@/components/spaObjects/ChildrenWithoutGroupObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    ChildrenOfGroupObj,
    ChildrenWithoutGroupObj,
  },
  data() {
    return { groupId: this.$route.params.groupId };
  },
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
