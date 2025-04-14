<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div class="flex items-center gap-4 sm:gap-6">
    <router-link
      to="/login"
      class="text-lg leading-none text-title dark:text-white transition-all duration-300 hover:text-primary hidden lg:block"
    ></router-link>
    <button class="hdr_search_btn" aria-label="search" @click="wishList = !wishList">
      <i
        class="mdi mdi-magnify text-title dark:text-white text-[24px] sm:text-[28px]"
      ></i>
    </button>
    <!-- <button class="relative hdr_wishList_btn" @click="wishList = !wishList">
      <span
        class="absolute w-[22px] h-[22px] bg-secondary top-[0px] -right-[11px] rounded-full flex items-center justify-center text-xs leading-none text-white"
        >14</span
      >
      <i
        class="mdi mdi-cards-heart-outline text-title dark:text-white text-[24px] sm:text-[28px]"
      ></i>
    </button> -->
    <div
      v-if="wishList"
      class="search_popup fixed top-0 left-0 bg-red dark:bg-[#39434D] bg-opacity-90 dark:bg-opacity-80 backdrop-blur-[3px] dark:backdrop-blur-[7.5px] w-full h-screen z-[999] px-[15px] md:px-[30px] py-12 md:py-[70px] overflow-y-auto transform scale-90 opacity-0 invisible transition-all duration-300 flex items-center justify-center search-active"
    >
      <div class="w-full max-w-[800px] mx-auto">
        <div class="relative">
          <input
            type="text"
            placeholder="Search for products..."
            class="w-full h-14 md:h-16 bg-white dark:bg-dark-secondary border-2 border-primary rounded-lg px-5 pr-12 text-lg outline-none"
            v-model="searchQuery"
            @input="handleSearch"
          />
          <button
            class="absolute right-4 top-1/2 -translate-y-1/2"
            @click="handleSearchSubmit"
          >
            <i class="mdi mdi-magnify text-primary text-2xl"></i>
          </button>

          <!-- Search Results -->
          <div
            v-if="showResults && searchResults.length > 0"
            class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-dark-secondary rounded-lg shadow-lg overflow-hidden"
          >
            <div
              v-for="product in searchResults"
              :key="product.id"
              @click="handleProductClick(product)"
              class="flex items-center gap-4 p-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              <img
                :src="product.image"
                :alt="product.name"
                class="w-16 h-16 object-cover rounded"
              />
              <div>
                <h4 class="font-medium text-lg dark:text-white">{{ product.name }}</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Category: {{ product.categorySlug }}
                </p>
                <p v-if="product.price" class="text-primary font-medium">
                  Rp {{ product.price }}
                </p>
              </div>
            </div>
          </div>

          <!-- No Results Message -->
          <div
            v-if="showResults && searchQuery && searchResults.length === 0"
            class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-dark-secondary rounded-lg shadow-lg p-4 text-center"
          >
            <p class="text-gray-600 dark:text-gray-300">No products found</p>
          </div>
        </div>

        <div class="mt-8 text-center">
          <button
            class="text-white hover:text-primary transition-colors"
            @click="wishList = false"
          >
            <i class="mdi mdi-close text-3xl"></i>
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="cartList"
      class="hdr_cart_popup w-80 md:w-96 absolute z-50 top-full right-0 sm:right-10 xl:right-0 bg-white dark:bg-title p-5 md:p-[30px] border border-primary"
    >
      <h4 class="font-medium leading-none mb-4 text-xl md:text-2xl"></h4>
      <div></div>
    </div>
    <button class="hamburger" :class="toggle ? 'opened' : ''" @click="handleToggle">
      <svg
        class="stroke-current text-title dark:text-white"
        width="40"
        viewBox="0 0 100 100"
      >
        <path
          class="line line1"
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path class="line line2" d="M 20,50 H 80" />
        <path
          class="line line3"
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </button>
    <div class="w-[1px] bg-title/20 dark:bg-white/20 h-7 hidden sm:block"></div>
    <!-- <SwitcherS /> -->
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, computed } from "vue";
import { useRouter } from "vue-router";
import { productList } from "@/data/data";

const wishList = ref(false);
const cartList = ref(false);
const router = useRouter();
const searchQuery = ref("");
const searchResults = ref([]);
const showResults = ref(false);

const props = defineProps({
  toggle: Boolean,
});

// Computed property untuk filter products
const filteredProducts = computed(() => {
  if (!searchQuery.value) return [];

  const query = searchQuery.value.toLowerCase();
  return productList
    .filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.categorySlug.toLowerCase().includes(query)
      );
    })
    .slice(0, 5); // Limit hasil pencarian ke 5 item
});

const handleSearch = () => {
  if (searchQuery.value.length > 0) {
    searchResults.value = filteredProducts.value;
    showResults.value = true;
  } else {
    searchResults.value = [];
    showResults.value = false;
  }
};

const handleSearchSubmit = () => {
  if (searchQuery.value) {
    wishList.value = false; // Tutup search popup
    router.push({
      path: "/product-category",
      query: { search: searchQuery.value },
    });
  }
};

const handleProductClick = (product) => {
  wishList.value = false; // Tutup search popup
  router.push(`/product-details/${product.id}`);
};
const emit = defineEmits(["toggle-change"]);

function handleToggle() {
  emit("toggle-change", !props.toggle); // Correctly use `toggle` prop here
}
</script>
