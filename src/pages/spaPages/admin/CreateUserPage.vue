<template>
  <div class="spa">
    <NavigationObj />
    <main>
      <HeaderObj />
      <CreateUserObj />
    </main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import CreateUserObj from "@/components/spaObjects/UserCreateObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    CreateUserObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
