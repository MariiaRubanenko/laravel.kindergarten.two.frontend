<template>
  <!-- Contact Start -->
  <div class="container-fluid pt-10">
    <div class="container">
      <div class="text-center pb-2">
        <p class="section-title px-5">
          <span class="px-2">{{ $t("contacts.title") }}</span>
        </p>
        <h1 class="mb-4">{{ $t("contacts.tagline") }}</h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-7 mb-5">
          <div class="contact-form">
            <div id="success"></div>
            <form @submit.prevent="submitForm" novalidate="novalidate">
              <div class="control-group">
                <input
                  v-model="formData.name"
                  type="text"
                  class="form-control"
                  id="name"
                  :placeholder="$t('contacts.placeholders.yourName')"
                  required="required"
                />
                <p class="help-block text-danger">{{ formErrors.name }}</p>
              </div>
              <div class="control-group">
                <input
                  v-model="formData.email"
                  type="email"
                  class="form-control"
                  id="email"
                  :placeholder="$t('contacts.placeholders.yourEmail')"
                  required="required"
                />
                <p class="help-block text-danger">{{ formErrors.email }}</p>
              </div>
              <div class="control-group">
                <input
                  v-model="formData.subject"
                  type="text"
                  class="form-control"
                  id="subject"
                  :placeholder="$t('contacts.placeholders.subject')"
                  required="required"
                />
                <p class="help-block text-danger">{{ formErrors.subject }}</p>
              </div>
              <div class="control-group">
                <textarea
                  v-model="formData.message"
                  class="form-control"
                  rows="6"
                  id="message"
                  :placeholder="$t('contacts.placeholders.message')"
                  required="required"
                ></textarea>
                <p class="help-block text-danger">{{ formErrors.message }}</p>
              </div>
              <div>
                <button class="btn btn-primary py-2 px-4" type="submit">
                  {{ $t("contacts.sendButton") }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Contact End -->
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      formErrors: {},
    };
  },
  methods: {
    submitForm() {
      // Your form submission logic here
      // Access form data using this.formData
    },
  },
};
</script>

<style></style>
