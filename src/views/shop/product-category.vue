<template>
  <div>
    <NavbarOne />

    <div
      class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-opacity-70"
    >
      <div class="text-center w-full">
        <h2 class="text-black text-8 md:text-[40px] font-normal leading-none text-center">
          Room Interior
        </h2>
        <ul
          class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-black mt-3 md:mt-4"
        >
          <li><router-link to="/">Home</router-link></li>
          <li>/</li>
          <li><router-link to="/shop-v1">Shop</router-link></li>
          <li>/</li>
          <li class="text-primary">Room Interior</li>
        </ul>
      </div>
    </div>

    <div class="s-py-100">
      <div class="container-fluid">
        <div data-aos="fade-up" data-aos-delay="200">
          <LayoutOne
            :classList="'max-w-[1720px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8 aos-init aos-animate'"
            :productList="filterProducts"
          />

          <div class="mt-10 md:mt-12 flex items-center justify-center gap-[10px]">
            <router-link to="#" class="text-title dark:text-white text-xl"
              ><span class="lnr lnr-arrow-left"></span
            ></router-link>
            <router-link
              to="#"
              class="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title"
              >01</router-link
            >
            <router-link
              to="#"
              class="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title"
              >02</router-link
            >
            <router-link
              to="#"
              class="text-title dark:text-white text-3xl sm:text-4xl transform"
              >...</router-link
            >
            <router-link
              to="#"
              class="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title"
              >09</router-link
            >
            <router-link
              to="#"
              class="w-8 sm:w-10 h-8 sm:h-10 bg-title bg-opacity-5 flex items-center justify-center leading-none text-base sm:text-lg font-medium text-title transition-all duration-300 hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title"
              >10</router-link
            >

            <router-link to="#" class="text-title dark:text-white text-xl"
              ><span class="lnr lnr-arrow-right"></span
            ></router-link>
          </div>
        </div>
      </div>
    </div>

    <FooterOne />

    <ScrollToTop />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
// import { useRoute } from "vue-router";

import NavbarOne from "@/components/navbar/navbar-one.vue";
import LayoutOne from "@/components/product/layout-one.vue";
import FooterOne from "@/components/footer/footer-six.vue";
import ScrollToTop from "@/components/scroll-to-top.vue";
import { categoryOne } from "@/data/data";
// import bg from "@/assets/img/shortcode/breadcumb.jpg";
import { productList } from "@/data/data";
import Aos from "aos";
import { useRoute } from "vue-router";

onMounted(() => {
  Aos.init();
});

const category = ref(null);
const filterProducts = ref([]);
// Define reactive variables using ref

const route = useRoute();
const slug = ref(route.params.slug);

// Function to filter products based on id
const filterProductsAndCategory = () => {
  category.value = categoryOne.find((c) => c.slug === slug.value);

  if (category.value) {
    // Memfilter produk berdasarkan categorySlug
    filterProducts.value = productList.filter(
      (product) => product.categorySlug === category.value.slug
    );
  }
};

console.log("data", filterProductsAndCategory);
console.log("data2", filterProducts);

// Initialize AOS on mounted
onMounted(() => {
  Aos.init();
  filterProductsAndCategory();
});
</script>
