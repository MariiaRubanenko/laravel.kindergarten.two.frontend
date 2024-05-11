<template>
  <NavbarObj />
  <SideHeaderObj />
  <ContactObj />
  <FooterObj />
  <BackToTopObj />
</template>

<script>
import NavbarObj from "@/components/visitCardObjects/NavbarObj.vue";
import SideHeaderObj from "@/components/visitCardObjects/SideHeaderObj.vue";
import ContactObj from "@/components/visitCardObjects/ContactObj.vue";
import FooterObj from "@/components/visitCardObjects/FooterObj.vue";
import BackToTopObj from "@/components/visitCardObjects/BackToTopObj.vue";

export default {
  components: {
    NavbarObj,
    SideHeaderObj,
    ContactObj,
    BackToTopObj,
    FooterObj,
  },
  data() {},
};
</script>

<style scoped>
@import "@/style/style.css";
</style>
