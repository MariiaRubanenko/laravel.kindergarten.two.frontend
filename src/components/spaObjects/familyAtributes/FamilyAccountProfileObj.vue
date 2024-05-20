<template>
  <div class="container-fluid py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5">
          <img
            class="img-fluid-center rounded-fullcircle mb-5 mb-lg-5"
            :src="getImageSource()"
            alt=""
          />
        </div>
        <div class="col-lg-7">
          <h2 style="margin-bottom: 0.75rem">
            {{ $t("parentProfile.title") }}
          </h2>
          <div class="alert alert-danger mb-3 py-2" role="alert" v-if="errored">
            {{ error }}
          </div>
          <div
            v-for="(control, index) in controls"
            :key="index"
            class="control-group"
          >
            <label class="label-light">{{ $t(control.label) }}</label>
            <div class="output">
              <InfoBoxLoader :loading="loading" />
              <template v-if="!loading">
                {{ parent[control.property] || "-" }}
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCookies } from "@/api/request";

import axios from "axios";
import InfoBoxLoader from "@/components/Elements/InfoBoxLoader.vue";

export default {
  components: { InfoBoxLoader },
  data() {
    return {
      parent: {},
      controls: [
        { label: "parentProfile.name.label", property: "name" },
        { label: "parentProfile.email.label", property: "email" },
        { label: "parentProfile.phone.label", property: "phone" },
      ],
      errored: false,
      error: "Error",
      loading: true,
      parentId: this.$route.params.familyId,
    };
  },
  mounted() {
    this.fetchParent();
  },
  methods: {
    async fetchParent() {
      try {
        const response = await axios.get(
          `api/family_accounts/${this.parentId}`,
          {
            headers: {
              "X-XSRF-Token": getCookies("XSRF-TOKEN"),
            },
          }
        );
        this.parent = response.data.data;
        console.log(response.data.data);
      } catch (error) {
        this.errored = true;
        this.error = this.$t("parentProfile.dataLoadingError");
        console.error(this.$t("parentProfile.dataLoadingError"), error);
      } finally {
        this.loading = false;
      }
    },
    getImageSource() {
      if (this.loading || !this.parent.image_data || this.errored) {
        return require("@/assets/img/userDefault-light.png");
      } else {
        return `data:image/png;base64,${this.parent.image_data}`;
      }
    },
  },
};
</script>
