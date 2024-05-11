<template>
  <!-- Gallery Start -->
  <div class="container-fluid pt-5 pb-3">
    <div class="container">
      <div class="text-center pb-2">
        <p class="section-title px-5">
          <span class="px-2">{{ $t("gallery.title") }}</span>
        </p>
        <h1 class="mb-4">{{ $t("gallery.tagline") }}</h1>
      </div>
      <div class="row">
        <div class="col-12 text-center mb-2">
          <ul class="list-inline mb-4" id="portfolio-flters">
            <li class="btn btn-outline-primary m-1 active" data-filter="*">
              {{ $t("gallery.filter.all") }}
            </li>
            <li class="btn btn-outline-primary m-1" data-filter=".first">
              {{ $t("gallery.filter.playing") }}
            </li>
            <li class="btn btn-outline-primary m-1" data-filter=".second">
              {{ $t("gallery.filter.drawing") }}
            </li>
            <li class="btn btn-outline-primary m-1" data-filter=".third">
              {{ $t("gallery.filter.reading") }}
            </li>
          </ul>
        </div>
      </div>
      <div class="row portfolio-container">
        <div
          v-for="(item, index) in portfolioItems"
          :key="index"
          :class="[
            'col-lg-4',
            'col-md-6',
            'mb-4',
            'portfolio-item',
            item.category,
          ]"
        >
          <div class="position-relative overflow-hidden mb-2">
            <img
              class="img-fluid w-100"
              :src="require(`@/assets/img/portfolio-${index + 1}.jpg`)"
              alt=""
            />
            <div
              class="portfolio-btn bg-primary d-flex align-items-center justify-content-center"
            >
              <a
                :href="require(`@/assets/img/portfolio-${index + 1}.jpg`)"
                data-lightbox="portfolio"
              >
                <i class="fa fa-plus text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Gallery End -->
</template>

<script>
//import Isotope from "@/lib/isotope/isotope.pkgd.js";

/* export default {
  data() {
    return {
      portfolioIsotope: null,
    };
  },
  mounted() {
    // Инициализация Isotope
    this.portfolioIsotope = new Isotope(".portfolio-container", {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    // Обработчик клика по кнопкам фильтрации
    document.querySelectorAll("#portfolio-flters li").forEach((filter) => {
      filter.addEventListener("click", () => {
        document
          .querySelectorAll("#portfolio-flters li")
          .forEach((f) => f.classList.remove("active"));
        filter.classList.add("active");

        const filterValue = filter.getAttribute("data-filter");
        this.portfolioIsotope.arrange({ filter: filterValue });
      });
    });
  },
}; */
</script>

<style>
/* Здесь могут быть ваши стили */
</style>
