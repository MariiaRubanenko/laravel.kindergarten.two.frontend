<template>
  <div class="spa">
    <NavigationObj />
    <main>
      <HeaderObj />
      <CreateGroupObj />
      <GroupsObj />
    </main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import CreateGroupObj from "@/components/spaObjects/CreateGroupObj.vue";
import GroupsObj from "@/components/spaObjects/GroupsObj.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    CreateGroupObj,
    GroupsObj,
  },
  data() {},
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
</style>
