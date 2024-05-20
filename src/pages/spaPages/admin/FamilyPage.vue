<template>
  <div class="spa">
    <NavigationObj />
    <main>
      <HeaderObj /> <ChildrenOfFamilyObj />
      <div class="row justify-content-center">
        <div class="col-lg-6 mb-3">
          <div class="family-buttons">
            <router-link
              :to="{
                path: `/familyAccountProfile/${familyId}`,
              }"
              class="btn btn-primary mb-2"
              style="border-radius: 10px"
            >
              {{ $t("familyChildren.parentProfile") }}
            </router-link>
            <router-link
              :to="{ path: `/trustedPersons/${familyId}` }"
              class="btn btn-primary mb-2"
              style="border-radius: 10px"
            >
              {{ $t("familyChildren.trustedPersons") }}
            </router-link>
            <router-link
              :to="{ path: `/createChild/${familyId}`, name: 'Create Child' }"
              class="btn btn-primary mb-2"
              style="border-radius: 10px"
            >
              {{ $t("familyChildren.addNewChild") }}
            </router-link>
          </div>
        </div>
      </div>
      <FamilyPaymentsObj />
    </main>
  </div>
</template>

<script>
import NavigationObj from "@/components/spaObjects/NavigationObj.vue";
import HeaderObj from "@/components/spaObjects/HeaderObj.vue";
import ChildrenOfFamilyObj from "@/components/spaObjects/familyAtributes/ChildrenOfFamilyObj.vue";
import FamilyPaymentsObj from "@/components/spaObjects/payment/FamilyPayments.vue";

export default {
  components: {
    NavigationObj,
    HeaderObj,
    ChildrenOfFamilyObj,
    FamilyPaymentsObj,
  },
  data() {
    return { familyId: this.$route.params.familyId };
  },
};
</script>

<style lang="scss">
@import "@/style/spaStyle.css";
.family-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .btn {
    flex: 1 1 calc(33.333% - 1rem); /* Adjust width for 3 buttons per row and add some margin */
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    @media (max-width: 600px) {
      flex: 1 1 100%; /* Full width for smaller screens */
    }
  }
}
</style>
