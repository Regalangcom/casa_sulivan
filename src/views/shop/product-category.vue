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
          <li class="text-primary">Room Category</li>
        </ul>
      </div>
    </div>

    <div class="s-py-100">
      <div class="container-fluid">
        <div data-aos="fade-up" data-aos-delay="200">
          <LayoutOne
            :classList="'max-w-[1720px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-8 aos-init aos-animate'"
            :productList="paginatedProducts"
          />

          <!-- Pagination -->
          <div class="mt-10 md:mt-12 flex items-center justify-center gap-[10px]">
            <!-- Previous Button -->
            <button
              @click="previousPage"
              :disabled="currentPage === 1"
              :class="[
                'text-title dark:text-white text-xl',
                { 'opacity-50 cursor-not-allowed': currentPage === 1 },
              ]"
            >
              <span class="lnr lnr-arrow-left"></span>
            </button>

            <!-- Page Numbers -->
            <template v-for="pageNumber in displayedPages" :key="pageNumber">
              <!-- Ellipsis -->
              <span
                v-if="pageNumber === '...'"
                class="text-title dark:text-white text-3xl sm:text-4xl transform"
              >
                ...
              </span>

              <!-- Page Button -->
              <button
                v-else
                @click="goToPage(pageNumber)"
                :class="[
                  'w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center leading-none text-base sm:text-lg font-medium transition-all duration-300',
                  currentPage === pageNumber
                    ? 'bg-primary text-white'
                    : 'bg-title bg-opacity-5 text-title hover:bg-opacity-100 hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:hover:bg-opacity-100 dark:hover:text-title',
                ]"
              >
                {{ pageNumber }}
              </button>
            </template>

            <!-- Next Button -->
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              :class="[
                'text-title dark:text-white text-xl',
                { 'opacity-50 cursor-not-allowed': currentPage === totalPages },
              ]"
            >
              <span class="lnr lnr-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <FooterOne />

    <ScrollToTop />
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import NavbarOne from "@/components/navbar/navbar-one.vue";
import LayoutOne from "@/components/product/layout-one.vue";
import FooterOne from "@/components/footer/footer-six.vue";
import ScrollToTop from "@/components/scroll-to-top.vue";
import { categoryOne, productList } from "@/data/data";
import Aos from "aos";

const category = ref(null);
const filterProducts = ref([]);
const route = useRoute();
const slug = ref(route.params.slug);

// Pagination
const currentPage = ref(1);
const itemsPerPage = 12; // Jumlah item per halaman

// Computed properties untuk pagination cok
const totalPages = computed(() => {
  return Math.ceil(filterProducts.value.length / itemsPerPage);
});

const paginatedProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filterProducts.value.slice(startIndex, endIndex);
});

const displayedPages = computed(() => {
  const totalPagesToShow = 5;
  const pages = [];

  if (totalPages.value <= totalPagesToShow) {
    // Jika total halaman <= 5, tampilkan semua nomor halaman
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i);
    }
  } else {
    // Selalu tampilkan halaman pertama
    pages.push(1);

    if (currentPage.value > 3) {
      pages.push("...");
    }

    // Tampilkan halaman di sekitar halaman aktif
    for (
      let i = Math.max(2, currentPage.value - 1);
      i <= Math.min(totalPages.value - 1, currentPage.value + 1);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage.value < totalPages.value - 2) {
      pages.push("...");
    }

    // Selalu tampilkan halaman terakhir
    if (totalPages.value > 1) {
      pages.push(totalPages.value);
    }
  }

  return pages;
});

// Methods untuk pagination
const goToPage = (page) => {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

// Filter products function
const filterProductsAndCategory = () => {
  category.value = categoryOne.find((c) => c.slug === slug.value);

  if (category.value) {
    const filteredByCategory = productList.filter(
      (product) => product.categorySlug === category.value.slug
    );

    const groupedProducts = filteredByCategory.reduce((acc, product) => {
      if (!acc.find((p) => p.name === product.name)) {
        acc.push({
          ...product,
          variants: filteredByCategory.filter((p) => p.name === product.name),
        });
      }
      return acc;
    }, []);

    filterProducts.value = groupedProducts;
    currentPage.value = 1; // Reset ke halaman pertama setiap kali filter berubah
  }
};

onMounted(() => {
  Aos.init();
  filterProductsAndCategory();
});
</script>
