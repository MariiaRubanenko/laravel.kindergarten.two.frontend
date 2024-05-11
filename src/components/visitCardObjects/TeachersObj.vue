<template>
  <!-- Team Start -->
  <div class="container-fluid pt-5">
    <div class="container">
      <div class="text-center pb-2">
        <p class="section-title px-5">
          <span class="px-2">{{ $t("teachers.title") }}</span>
        </p>
        <h1 class="mb-4">{{ $t("teachers.tagline") }}</h1>
      </div>
      <div class="row">
        <div
          v-for="(teacher, key) in teacherData"
          :key="key"
          class="col-md-6 col-lg-3 text-center team mb-5"
        >
          <div
            class="position-relative overflow-hidden mb-4"
            style="border-radius: 100%"
          >
            <img class="img-fluid w-100" :src="teacher.image" alt="" />
            <div
              class="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
            >
              <a
                class="btn btn-outline-light text-center mr-2 px-0"
                style="width: 38px; height: 38px"
                :href="teacher.telegram"
                ><i class="fab fa-telegram"></i
              ></a>
              <a
                class="btn btn-outline-light text-center mr-2 px-0"
                style="width: 38px; height: 38px"
                :href="teacher.facebook"
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a
                class="btn btn-outline-light text-center px-0"
                style="width: 38px; height: 38px"
                :href="'mailto:' + teacher.email"
                ><i class="fa fa-envelope"></i
              ></a>
            </div>
          </div>
          <h4>{{ $t("teachers." + teacher.translationKey + ".name") }}</h4>
          <i>{{ $t("teachers." + teacher.translationKey + ".role") }}</i>
        </div>
      </div>
    </div>
  </div>
  <!-- Team End -->
</template>

<script>
export default {
  data() {
    return {
      teacherData: [
        {
          translationKey: "musicTeacher",
          image: require("@/assets/img/team-1.jpg"),
          telegram: "https://t.me/nure_press",
          facebook: "https://www.facebook.com/nureKharkiv/",
          email: "nikita.lisovyy@gmail.com",
        },
        {
          translationKey: "englishTeacher",
          image: require("@/assets/img/team-2.jpg"),
          telegram: "https://t.me/nure_press",
          facebook: "https://www.facebook.com/nureKharkiv/",
          email: "nikita.lisovyy@gmail.com",
        },
        {
          translationKey: "danceTeacher",
          image: require("@/assets/img/team-3.jpg"),
          telegram: "https://t.me/nure_press",
          facebook: "https://www.facebook.com/nureKharkiv/",
          email: "nikita.lisovyy@gmail.com",
        },
        {
          translationKey: "artTeacher",
          image: require("@/assets/img/team-4.jpg"),
          telegram: "https://t.me/nure_press",
          facebook: "https://www.facebook.com/nureKharkiv/",
          email: "nikita.lisovyy@gmail.com",
        },
      ],
    };
  },
};
</script>

<style></style>
