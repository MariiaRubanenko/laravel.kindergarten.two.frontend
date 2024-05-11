<template>
  <NavbarObj />
  <LogInObj />
  <BackToTopObj />
</template>

<script>
import NavbarObj from "@/components/visitCardObjects/NavbarObj.vue";
import LogInObj from "@/components/visitCardObjects/LogInObj.vue";
import BackToTopObj from "@/components/visitCardObjects/BackToTopObj.vue";

export default {
  components: {
    NavbarObj,
    LogInObj,
    BackToTopObj,
  },
  data() {},
};
</script>

<style scoped>
@import "@/style/style.css";
</style>
