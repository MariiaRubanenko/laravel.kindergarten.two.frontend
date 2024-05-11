<template>
  <NavbarObj />
  <SideHeaderObj />
  <GalleryObj />
  <FooterObj />
  <BackToTopObj />
</template>

<script>
import NavbarObj from "@/components/visitCardObjects/NavbarObj.vue";
import SideHeaderObj from "@/components/visitCardObjects/SideHeaderObj.vue";
import GalleryObj from "@/components/visitCardObjects/GalleryObj.vue";
import FooterObj from "@/components/visitCardObjects/FooterObj.vue";
import BackToTopObj from "@/components/visitCardObjects/BackToTopObj.vue";

export default {
  components: {
    NavbarObj,
    FooterObj,
    SideHeaderObj,
    GalleryObj,
    BackToTopObj,
  },
  data() {},
};
</script>

<style scoped>
@import "@/style/style.css";
</style>
