<template>
  <div class="spa">
    <NavigationObj />
    <main>
      <HeaderObj />
      <div class="d-lg-flex justify-content-center">
        <div class="col-lg-5 mb-5 mr-lg-5 mb-lg-0 mr-lg-3 fullscreen-container">
          <StaffsOfGroupObj />
        </div>
        <div class="col-lg-5 fullscreen-container">
          <StaffsWithoutGroupObj />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import StaffsOfGroupObj from "@/components/spaObjects/groupAtributes/StaffsOfGroupObj.vue";
import StaffsWithoutGroupObj from "@/components/spaObjects/groupAtributes/StaffWithoutGroupObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    StaffsOfGroupObj,
    StaffsWithoutGroupObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
