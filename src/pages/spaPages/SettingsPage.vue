<template>
  <div class="spa">
    <NavigationObj />
    <main>
      <HeaderObj />
      <SwitchLanguageObj />
      <PasswordChangingObj />
    </main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import SwitchLanguageObj from "@/components/spaObjects/settings/SwitchLanguageObj.vue";
import PasswordChangingObj from "@/components/spaObjects/settings/PasswordChangingObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    SwitchLanguageObj,
    PasswordChangingObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
