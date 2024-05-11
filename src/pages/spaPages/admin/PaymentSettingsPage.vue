<template>
  <div class="spa">
    <NavigationObj />
    <main>
      <HeaderObj />
      <CreateDailyPricesObj />
      <DailyPricesObj />
    </main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import CreateDailyPricesObj from "@/components/spaObjects/payment/CreateDailyPricesObj.vue";
import DailyPricesObj from "@/components/spaObjects/payment/DailyPricesObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    CreateDailyPricesObj,
    DailyPricesObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
