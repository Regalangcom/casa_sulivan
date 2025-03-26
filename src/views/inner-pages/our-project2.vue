<template>
  <div>
    <NavbarOne />

    <div
      class="flex items-center gap-4 flex-wrap p-14 sm:p-16 before:bg-title before:bg-opacity-70"
    >
      <div class="text-center w-full">
        <h2 class="text-black text-8 md:text-[40px] font-normal leading-none text-center">
          Our Projects
        </h2>
        <ul
          class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-black mt-3 md:mt-4"
        >
          <li><router-link to="/">Home</router-link></li>
          <li>/</li>
          <li class="text-primary">Our Project</li>
        </ul>
      </div>
    </div>

    <div class="s-pb-100 s-pt-100">
      <div class="container-fluid">
        <div class="max-w-[1720px] mx-auto flex justify-between gap-8">
          <div class="container-fluid">
            <div class="max-w-[1720px] mx-auto">
              <div
                class="portfolio2-button flex items-center gap-3 md:gap-4 lg:gap-6 flex-wrap mb-8 md:mb-12"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <button
                  @click="activeTab = 1"
                  class="text-base md:text-[17px] leading-none font-medium hover:text-primary duration-300"
                  :class="activeTab === 1 ? 'active' : ''"
                >
                  All
                </button>
                <button
                  @click="activeTab = 2"
                  class="text-base md:text-[17px] leading-none font-medium hover:text-primary duration-300"
                  :class="activeTab === 2 ? 'active' : ''"
                >
                  <!-- Full Custom -->
                </button>
                <button
                  @click="activeTab = 3"
                  class="text-base md:text-[17px] leading-none font-medium hover:text-primary duration-300"
                  :class="activeTab === 3 ? 'active' : ''"
                >
                  <!-- Lamp & Vase -->
                  <!-- Chairs -->
                </button>
                <button
                  @click="activeTab = 4"
                  class="text-base md:text-[17px] leading-none font-medium hover:text-primary duration-300"
                  :class="activeTab === 4 ? 'active' : ''"
                >
                  <!-- Table -->
                </button>

                <button
                  @click="activeTab = 5"
                  class="text-base md:text-[17px] leading-none font-medium hover:text-primary duration-300"
                  :class="activeTab === 5 ? 'active' : ''"
                >
                  <!-- Art Design -->
                  <!-- Sofa -->
                </button>
                <button
                  @click="activeTab = 6"
                  class="text-base md:text-[17px] leading-none font-medium hover:text-primary duration-300"
                  :class="activeTab === 5 ? 'active' : ''"
                >
                  <!-- Art Design -->
                  <!-- mirror -->
                </button>
              </div>

              <div
                v-if="activeTab === 1"
                class="portfolio2-isotope -m-[10px] sm:-m-[15px]"
              >
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                  <router-link
                    v-for="(item, index) in portfolioTwo.slice(0, 3)"
                    :key="index"
                    :to="`/portfolio-details-v1/${item.id}`"
                    class=""
                  >
                    <div
                      class="portfolio-card relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:duration-300 hover:before:opacity-100 group overflow-hidden"
                    >
                      <img
                        class="w-full object-cover"
                        :src="item.image"
                        alt="Portfolio"
                      />
                      <div
                        class="absolute left-7 bottom-7 z-10 transform translate-y-8 duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        <span
                          class="inline-block text-[15px] leading-none text-title font-medium p-[10px] bg-[#DBCBBD] rounded-md"
                          >{{ item.tag }}</span
                        >
                        <span
                          class="block text-lg md:text-xl font-semibold leading-none text-white mt-3 md:mt-4"
                        >
                          {{ item.name }}
                        </span>
                      </div>
                      <span
                        class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 block"
                      >
                        <i class="mdi mdi-arrow-expand-all text-white text-[40px]"></i>
                      </span>
                    </div>
                  </router-link>
                </div>

                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                  <router-link
                    v-for="(item, index) in portfolioTwo.slice(3, 6)"
                    :key="index"
                    :to="`/portfolio-details-v1/${item.id}`"
                    class=""
                  >
                    <div
                      class="portfolio-card mt-5 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:duration-300 hover:before:opacity-100 group overflow-hidden"
                    >
                      <img
                        class="w-full object-cover"
                        :src="item.image"
                        alt="Portfolio"
                      />
                      <div
                        class="absolute left-7 bottom-7 z-10 transform translate-y-8 duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        <span
                          class="inline-block text-[15px] leading-none text-title font-medium p-[10px] bg-[#DBCBBD] rounded-md"
                          >{{ item.tag }}</span
                        >
                        <span
                          class="block text-lg md:text-xl font-semibold leading-none text-white mt-3 md:mt-4"
                        >
                          {{ item.name }}
                        </span>
                      </div>
                      <span
                        class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 block"
                      >
                        <i class="mdi mdi-arrow-expand-all text-white text-[40px]"></i>
                      </span>
                    </div>
                  </router-link>
                </div>
              </div>

              <div
                v-if="activeTab === 2"
                class="portfolio2-isotope -m-[10px] sm:-m-[15px]"
              >
                <div class="grid md:grid-cols-2 grid-cols-1 gap-7 mt-7 mb-7">
                  <router-link to="">
                    <!-- <router-link to="/portfolio-details-v1"> -->
                    <div
                      class="portfolio-card relative h-full before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:duration-300 hover:before:opacity-100 group overflow-hidden"
                    >
                      <!-- <img
                      class="w-full h-full object-cover"
                      :src="image1"
                      alt="Portfolio"
                    /> -->
                      <img class="w-full h-full object-cover" alt="Portfolio" />
                      <div
                        class="absolute left-7 bottom-7 z-10 transform translate-y-8 duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        <span
                          class="inline-block text-[15px] leading-none text-title font-medium p-[10px] bg-[#DBCBBD] rounded-md"
                          >Table</span
                        >
                        <span
                          class="block text-lg md:text-xl font-semibold leading-none text-white mt-3 md:mt-4"
                        >
                          Classic Vase & Chair
                        </span>
                      </div>
                      <span
                        class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 block"
                      >
                        <i class="mdi mdi-arrow-expand-all text-white text-[40px]"></i>
                      </span>
                    </div>
                  </router-link>
                </div>
              </div>
              <div
                v-if="activeTab === 3"
                class="portfolio2-isotope -m-[10px] sm:-m-[15px]"
              >
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                  <router-link
                    v-for="(item, index) in portfolioTwo.slice(0, 3)"
                    :key="index"
                    :to="`/portfolio-details-v1/${item.id}`"
                    class=""
                  >
                    <div
                      class="portfolio-card relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:duration-300 hover:before:opacity-100 group overflow-hidden"
                    >
                      <img
                        class="w-full object-cover"
                        :src="item.image"
                        alt="Portfolio"
                      />
                      <div
                        class="absolute left-7 bottom-7 z-10 transform translate-y-8 duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        <span
                          class="inline-block text-[15px] leading-none text-title font-medium p-[10px] bg-[#DBCBBD] rounded-md"
                          >{{ item.tag }}</span
                        >
                        <span
                          class="block text-lg md:text-xl font-semibold leading-none text-white mt-3 md:mt-4"
                        >
                          {{ item.name }}
                        </span>
                      </div>
                      <span
                        class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 block"
                      >
                        <i class="mdi mdi-arrow-expand-all text-white text-[40px]"></i>
                      </span>
                    </div>
                  </router-link>
                </div>
              </div>
              <div
                v-if="activeTab === 4"
                class="portfolio2-isotope -m-[10px] sm:-m-[15px]"
              >
                <div class="grid md:grid-cols-2 grid-cols-1 gap-7 mt-7 mb-7">
                  <div class="">
                    <div class="relative">
                      <Swiper
                        :modules="[Autoplay, Navigation]"
                        :slides-per-view="3"
                        :space-between="20"
                        :loop="true"
                        :navigation="true"
                        :autoplay="{ delay: 3000 }"
                        :breakpoints="{
                          320: { slidesPerView: 1, spaceBetween: 0 },
                          576: { slidesPerView: 1, spaceBetween: 0 },
                          1024: { slidesPerView: 1, spaceBetween: 0 },
                        }"
                        class="portfolio-v3-slider owl-carousel block"
                      >
                        <SwiperSlide>
                          <router-link
                            class="relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:bg-opacity-20"
                            to="/portfolio-details-v1"
                          >
                            <img class="w-full" :src="image2" alt="Portfolio" />
                          </router-link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <router-link
                            class="relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:bg-opacity-20"
                            to="/portfolio-details-v1"
                          >
                            <img class="w-full" :src="image3" alt="Portfolio" />
                          </router-link>
                        </SwiperSlide>
                        <SwiperSlide>
                          <router-link
                            class="relative before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-title before:bg-opacity-20"
                            to="/portfolio-details-v1"
                          >
                            <img class="w-full" :src="image4" alt="Portfolio" />
                          </router-link>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="activeTab === 5"
                class="portfolio2-isotope -m-[10px] sm:-m-[15px]"
              >
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                  <router-link
                    v-for="(item, index) in portfolioTwo.slice(3, 6)"
                    :key="index"
                    :to="`/portfolio-details-v1/${item.id}`"
                    class=""
                  >
                    <div
                      class="portfolio-card relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 before:duration-300 hover:before:opacity-100 group overflow-hidden"
                    >
                      <img
                        class="w-full object-cover"
                        :src="item.image"
                        alt="Portfolio"
                      />
                      <div
                        class="absolute left-7 bottom-7 z-10 transform translate-y-8 duration-300 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      >
                        <span
                          class="inline-block text-[15px] leading-none text-title font-medium p-[10px] bg-[#DBCBBD] rounded-md"
                          >{{ item.tag }}</span
                        >
                        <span
                          class="block text-lg md:text-xl font-semibold leading-none text-white mt-3 md:mt-4"
                        >
                          {{ item.name }}
                        </span>
                      </div>
                      <span
                        class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-100 block"
                      >
                        <i class="mdi mdi-arrow-expand-all text-white text-[40px]"></i>
                      </span>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="max-w-[894px] w-full hidden lg:block" data-aos="zoom-in">
            <img class="w-full" :src="bg2" alt="contct" />
          </div> -->
        </div>
      </div>
    </div>

    <FooterSix />

    <ScrollToTop />
  </div>
</template>

<script setup>
import NavbarOne from "@/components/navbar/navbar-one.vue";

// import bg2 from "@/assets/img/Casa-Sulivan-logo-new-brown.png";
import { onMounted, ref } from "vue";
import Aos from "aos";
// import FooterOne from "@/components/footer/footer-one.vue";
import image2 from "@/assets/img/gallery/portfolio-03/portfolio-02.jpg";
import image3 from "@/assets/img/gallery/portfolio-03/portfolio-03.jpg";
import image4 from "@/assets/img/gallery/portfolio-03/portfolio-04.jpg";
import FooterSix from "@/components/footer/footer-six.vue";
import ScrollToTop from "@/components/scroll-to-top.vue";
import { portfolioTwo } from "@/data/portfolio-data";

const activeTab = ref(1);

onMounted(() => {
  Aos.init();
});

// const isOpen = ref(false);
// const selectedOption = ref("Navana Furniture");

// const options = [
//   "Navana Furniture",
//   "RFL Furniture",
//   "Gazi Furniture",
//   "Plastic Furniture",
//   "Luxury Furniture",
// ];

// const toggleDropdown = () => {
//   isOpen.value = !isOpen.value;
// };

// const handleSelect = (option, event) => {
//   event.stopPropagation();
//   selectedOption.value = option;
//   isOpen.value = false;
// };
</script>
