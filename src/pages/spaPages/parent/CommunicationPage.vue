<template>
  <div class="spa">
    <NavigationObj />
    <main>
      <HeaderObj />
      <CommunicationObj />
    </main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import CommunicationObj from "@/components/spaObjects/CommunicationObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    CommunicationObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
