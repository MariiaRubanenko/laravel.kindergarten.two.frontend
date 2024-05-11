<template>
  <div class="spa">
    <NavigationObj />
    <main>
      <HeaderObj />
      <FamilyPaymentsObj />
    </main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import FamilyPaymentsObj from "@/components/spaObjects/payment/FamilyPayments.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    FamilyPaymentsObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
