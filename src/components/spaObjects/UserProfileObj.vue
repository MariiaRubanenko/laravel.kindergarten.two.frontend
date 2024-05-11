<template>
  <div class="container-fluid py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5">
          <img
            class="img-fluid-center rounded-fullcircle mb-5 mb-lg-5"
            :src="getImageSource()"
            alt=""
            @click="$refs.fileInput.click()"
          />
          <input
            type="file"
            @change="onFileSelected"
            ref="fileInput"
            style="display: none"
          />
          <button @click="uploadImage">Загрузить фото</button>
        </div>
        <div class="col-lg-7">
          <h2 style="margin-bottom: 0.75rem">
            {{ $t("userProfile.title") }}
          </h2>
          <div
            v-for="(control, index) in controls"
            :key="index"
            class="control-group"
          >
            <label class="label-light">{{ $t(control.label) }}</label>
            <div class="output">
              <InfoBoxLoader :loading="loading" />
              <template v-if="!loading">
                {{ user[control.property] || "-" }}
              </template>
            </div>
          </div>
          <form @submit.prevent="changeUserPhone" novalidate="novalidate">
            <h2 style="margin-bottom: 0.75rem; margin-top: 1rem">
              {{ $t("userProfile.phoneChanging.title") }}
            </h2>
            <Textbox
              v-model="changePhone.newPhone"
              :type="'text'"
              :placeholder="
                $t('userProfile.phoneChanging.newPhone.placeholder')
              "
              :required="true"
              :label="$t('userProfile.phoneChanging.newPhone.label')"
              :errorMessage="
                v$.newPhone.$error
                  ? v$.newPhone.$errors[0].$message
                  : validated
                  ? validation.phone_number[0]
                  : ''
              "
            />
            <div class="text-right" style="margin-top: -0.5rem">
              <button
                class="btn btn-primary py-2 px-2.5"
                style="border-radius: 10px"
                type="submit"
              >
                {{ $t("spa.buttons.change") }}
              </button>
            </div>
            <div
              class="alert alert-danger mt-3 py-2"
              role="alert"
              v-if="errored"
            >
              {{ error }}
            </div>
            <div
              class="alert alert-danger mt-3 py-2"
              role="alert"
              v-if="messaged"
            >
              {{ message }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCookies } from "@/api/request";

import axios from "axios";
import router from "@/router/rouer";
import InfoBoxLoader from "@/components/Elements/InfoBoxLoader.vue";
import Textbox from "@/components/Elements/TextBox.vue";

import { useVuelidate } from "@vuelidate/core";
import { required, minLength, maxLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
  components: { Textbox, InfoBoxLoader },
  setup() {
    const changePhone = reactive({ newPhone: "" });

    const rules = computed(() => {
      return {
        newPhone: {
          required,
          minLength: minLength(10),
          maxLength: maxLength(15),
        },
      };
    });

    const v$ = useVuelidate(rules, changePhone);

    return { changePhone, v$ };
  },
  data() {
    return {
      user: {},
      controls: [
        { label: "userProfile.name.label", property: "name" },
        { label: "userProfile.email.label", property: "email" },
        { label: "userProfile.phone.label", property: "phone" },
      ],
      selectedFile: null,
      errored: false,
      error: "Error",
      messaged: false,
      message: "",
      validated: false,
      validation: {},
      loading: true,
      userRole: localStorage.getItem("userRole"),
      userId: this.$route.params.userId,
    };
  },
  mounted() {
    if (this.userRole == "teacher") {
      this.fetchStuff();
    }
    if (this.userRole == "parent") {
      this.fetchParent();
    }
  },
  methods: {
    async fetchStuff() {
      try {
        const response = await axios.get(`api/staffs/${this.userId}`, {
          headers: {
            "X-XSRF-Token": getCookies("XSRF-TOKEN"),
          },
        });
        this.user = response.data.data;
        console.log(this.user);
      } catch (error) {
        this.errored = true;
        this.error = this.$t("loading.user");
        console.error(this.$t("loading.user"), error);
      } finally {
        this.loading = false;
      }
    },
    async fetchParent() {
      try {
        const response = await axios.get(`api/family_accounts/${this.userId}`, {
          headers: {
            "X-XSRF-Token": getCookies("XSRF-TOKEN"),
          },
        });
        this.user = response.data.data;
      } catch (error) {
        this.errored = true;
        this.error = this.$t("loading.user");
        console.error(this.$t("loading.user"), error);
      } finally {
        this.loading = false;
      }
    },
    getImageSource() {
      if (this.loading || !this.user.image_data || this.errored) {
        return require("@/assets/img/userDefault-light.png");
      } else {
        return `data:image/png;base64,${this.user.image_data}`;
      }
    },
    async changeUserPhone() {
      this.v$.$validate();
      if (!this.v$.$error) {
        try {
          if (this.userRole == "teacher") {
            const staffForSending = {
              user_id: this.user.user_id,
              group_id: this.user.group_id,
              phone_number: this.changePhone.newPhone,
            };
            await axios.put(`api/staffs/${this.userId}`, staffForSending, {
              headers: {
                "X-XSRF-Token": getCookies("XSRF-TOKEN"),
              },
            });
          }
          if (this.userRole == "parent") {
            const parentForSending = {
              user_id: this.user.user_id,
              phone_number: this.changePhone.newPhone,
            };
            await axios.put(
              `api/family_accounts/${this.userId}`,
              parentForSending,
              {
                headers: {
                  "X-XSRF-Token": getCookies("XSRF-TOKEN"),
                },
              }
            );
          }
          router.go();
        } catch (error) {
          console.error("Error while changing phone:", error);
          if (error.response.data.error) {
            this.errored = true;
            this.error = error.response.data.error;
          }
          if (error.response.data.data) {
            this.validated = true;
            this.validation = error.response.data.data;
          }
          if (error.response.data.message) {
            this.messaged = true;
            this.message = error.response.data.message;
          }
        }
      }
    },
    openFileInput() {
      this.$refs.fileInput.click();
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    },
    async uploadImage() {
      if (!this.selectedFile) {
        return;
      }
      try {
        if (this.userRole == "teacher") {
          const response = await axios.put(
            `api/staffs/${this.userId}`,
            {
              user_id: this.user.user_id,
              group_id: this.user.group_id,
              image: this.selectedFile.data,
            },
            {
              headers: {
                "Content-Type": "multipart/form-data",
                "X-XSRF-Token": getCookies("XSRF-TOKEN"),
              },
            }
          );
          console.log(response.data);
        }
        if (this.userRole == "parent") {
          const response = await axios.put(
            `api/family_accounts/${this.userId}`,
            {
              user_id: this.user.user_id,
              image: this.selectedFile.data,
            },
            {
              headers: {
                "Content-Type": "multipart/form-data",
                "X-XSRF-Token": getCookies("XSRF-TOKEN"),
              },
            }
          );
          console.log(response.data);
        }
        router.go();
      } catch (error) {
        console.error("Error while uploading photo:", error);
        console.error("LogIn Error", error);
        if (error.response.data.error) {
          this.errored = true;
          this.error = error.response.data.error;
        }
        if (error.response.data.data) {
          this.validated = true;
          this.validation = error.response.data.data;
        }
        if (error.response.data.message) {
          this.messaged = true;
          this.message = error.response.data.message;
        }
      }
    },
  },
};
</script>
