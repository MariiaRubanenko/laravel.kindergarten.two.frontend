<template>
  <div class="spa">
    <NavigationObj />
    <main>
      <HeaderObj />
      <FeedbackSendObj />
    </main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import FeedbackSendObj from "@/components/spaObjects/payment/FeedbackSendObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    FeedbackSendObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
