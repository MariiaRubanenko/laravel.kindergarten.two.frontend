<template>
  <div class="spa">
    <NavigationObj />
    <main><HeaderObj /> <FamilyAccountProfileObj /></main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import FamilyAccountProfileObj from "@/components/spaObjects/familyAtributes/FamilyAccountProfileObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    FamilyAccountProfileObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
