<template>
  <div class="spa">
    <NavigationObj />
    <main>
      <HeaderObj />
      <AttendanceObj />
    </main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import AttendanceObj from "@/components/spaObjects/groupAtributes/AttendanceObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    AttendanceObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
