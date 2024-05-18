<template>
  <NavbarObj />
  <SideHeaderObj />
  <FeedbackObj />
  <FooterObj />
  <BackToTopObj />
</template>

<script>
import NavbarObj from "@/components/visitCardObjects/NavbarObj.vue";
import SideHeaderObj from "@/components/visitCardObjects/SideHeaderObj.vue";
import FeedbackObj from "@/components/visitCardObjects/FeedbackObj.vue";
import FooterObj from "@/components/visitCardObjects/FooterObj.vue";
import BackToTopObj from "@/components/visitCardObjects/BackToTopObj.vue";

export default {
  components: {
    NavbarObj,
    SideHeaderObj,
    FeedbackObj,
    BackToTopObj,
    FooterObj,
  },
  data() {},
};
</script>

<style scoped>
@import "@/style/style.css";
</style>
