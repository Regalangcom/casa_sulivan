<template>
  <div class="dark:bg-title">
    <NavbarOne />
    <swiper
      :modules="[Autoplay, Pagination]"
      :slides-per-view="1"
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000 }"
      class="carousel-slider-four owl-carousel block w-full md:h-[800px] h-[500px]"
    >
      <swiper-slide
        class="relative pt-12 md:pt-20 xl:pt-[126px] pb-12 sm:pb-20 xl:pb-24 px-[15px] sm:px-12 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${banner1})` }"
      >
        <div
          class="relative z-10 max-w-[1720px] mt-28 mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <!-- Bagian Konten Teks -->
          <div
            class="relative z-20 sm:max-w-[632px] w-full bg-white/80 md:bg-transparent md:p-0 p-6 rounded-lg shadow-lg text-center md:text-left"
          >
            <div class="flex items-end justify-center md:justify-start">
              <span
                class="font-bold text-5xl sm:text-7xl xl:text-9xl text-title leading-none dark:text-white"
              ></span>
              <!-- <img
                class="-ml-5 sm:-ml-10 w-[150px] sm:w-[200px] lg:w-[250px] xl:w-full"
                :src="banner3"
                alt="summer"
              /> -->
            </div>
            <h2
              class="mt-[18px] font-normal text-3xl sm:text-4xl xl:text-7xl !leading-[1.3] dark:text-white"
            >
              Modified Papasan Chair
            </h2>
            <p class="dark:text-white-light mt-3 md:mt-4 sm:max-w-[450px] xl:max-w-full">
              Discover the latest must-have arrivals! Elevate your style with our newest
              collection of trendsetting items.
            </p>
            <div class="button mt-4 md:mt-6">
              <router-link class="btn btn-outline" to="/" data-text="View Products"
                ><span>View Products</span></router-link
              >
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
        class="relative pt-12 md:pt-20 xl:pt-[100px] pb-12 sm:pb-20 xl:pb-24 px-[15px] sm:px-12 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${banner2})` }"
      >
        <div
          class="relative z-10 max-w-[1720px] mt-28 mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <!-- Bagian Konten Teks -->
          <div
            class="relative z-20 sm:max-w-[632px] w-full bg-white/80 md:bg-transparent md:p-0 p-6 rounded-lg shadow-lg text-center md:text-left"
          >
            <div class="flex items-end justify-center md:justify-start">
              <span
                class="font-bold text-5xl sm:text-7xl xl:text-9xl text-title leading-none dark:text-white"
              ></span>
            </div>
            <h2
              class="mt-[10px] font-normal text-3xl sm:text-4xl xl:text-7xl !leading-[1.3] dark:text-white"
            >
              Royal Armchair
            </h2>
            <p class="dark:text-white-light mt-3 md:mt-4 sm:max-w-[450px] xl:max-w-full">
              Discover the latest must-have arrivals! Elevate your style with our newest
              collection of trendsetting items.
            </p>
            <div class="button mt-4 md:mt-6">
              <router-link class="btn btn-outline" to="/shop-v1" data-text="lihat Produk"
                ><span>lihat Produk</span></router-link
              >
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- <div
      class="hv6-banner bg-overlay py-20 sm:py-24 md:py-32 2xl:py-[245px] bg-[#F3F3F3] dark:bg-title dark:before:bg-dark-secondary dark:before:bg-opacity-50 2xl:dark:before:hidden"
    >
      <div class="container">
        <div class="max-w-1366 mx-auto">
          <span
            class="text-xl sm:text-2xl lg:text-3xl leading-none block text-primary"
            data-aos="fade-up"
            >New Arrival</span
          >
          <h2
            class="text-3xl sm:text-5xl lg:text-6xl sm:leading-tight leading-tight lg:leading-tight max-w-[300px] sm:max-w-[400px] lg:max-w-[602px] mt-5"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Modified Papasan Chair
          </h2>
          <p
            class="max-w-[450px] lg:max-w-[550px] mt-3 sm:mt-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We offer you an extremely comfortable lounge sofa chair. Taking the time to
            relax at home or the office will be more appealing than ever when you choose a
            modern lounge sofa chair.
          </p>
          <div data-aos="fade-up" data-aos-delay="300">
            <router-link
              to="/shop-v1"
              class="btn btn-outline mt-6"
              data-text="Lihat Product"
            >
              <span>Lihat Product</span>
            </router-link>
          </div>
        </div>
      </div>
    </div> -->

    <div class="bg-[#EBEBEB] dark:bg-title s-py-100" data-aos="fade-up">
      <div class="container">
        <div class="max-w-1666 mx-auto">
          <div
            class="bg-[#F3F3F3] dark:bg-dark-secondary rounded-[10px] xl:flex xl:justify-between sm:gap-5 grid sm:grid-cols-2 relative"
          >
            <div v-for="(item, index) in servicesData" :key="index" class="relative">
              <div class="group flex items-center gap-5 p-6">
                <!-- /product-category -->
                <div
                  class="w-14 md:w-[130px] h-14 p-[10px] md:h-[70px] flex items-center justify-center border border-primary rounded-[10px] group-hover:bg-primary duration-300"
                >
                  <div class="block">
                    <img :src="item.image" alt="" />
                  </div>
                  <div class="hidden">
                    <img :src="item.image2" alt="" />
                  </div>
                </div>
                <div>
                  <h5 class="font-medium leading-none text-lg lg:text-xl">
                    {{ item.title }}
                  </h5>
                  <p class="leading-none mt-[10px]">{{ item.product }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="s-py-100-50 overflow-hidden mb-20">
      <div class="container-fluid">
        <div class="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up">
          <div>
            <img :src="chair" alt="" class="mx-auto w-14 sm:w-24" />
          </div>
          <h3 class="leading-none mt-4 md:mt-6 text-2xl md:text-3xl">Product Category</h3>
          <p class="mt-3">
            <!-- Explore our curated selection of premium products, tailored to suit every need
            and taste. From essentials to indulgences, find your perfect fit. -->
          </p>
        </div>

        <!-- GANTI SWIPER DENGAN FLEXBOX -->
        <div
          class="max-w-[1720px] mx-auto relative group"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="flex flex-wrap justify-center gap-5">
            <router-link
              v-for="(item, index) in categoryOne"
              :key="index"
              :to="`/category/${item.slug}`"
              class="relative block w-full sm:w-[48%] md:w-[30%] lg:w-[30%] flex-shrink-0 cursor-pointer"
            >
              <img class="w-full object-cover" :src="item.image" alt="product" />
              <div
                class="absolute bottom-7 left-0 px-5 transform w-full flex justify-start"
              >
                <div class="p-[15px] dark:bg-title w-auto">
                  <span class="md:text-xl text-primary font-medium leading-none">
                    {{ item.item }}
                  </span>
                  <h4 class="text-xl md:text-2xl mt-[10px] font-semibold leading-[1.5]">
                    {{ item.name }}
                  </h4>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <div class="text-center mt-7 md:mt-12">
          <router-link to="" class="btn btn-outline" data-text="All Category">
            <!-- <router-link to="/shop-v1" class="btn btn-outline" data-text="All Category"> -->
            <span>All Category</span>
          </router-link>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="max-w-xl mx-auto text-center" data-aos="fade-up">
      <h3 class="leading-none mt-4 md:mt-6 text-2xl md:text-3xl">Our Project</h3>
    </div>
    <!-- s-py-100-50 -->
    <div class="overflow-hidden relative">
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

          <div v-if="activeTab === 1" class="portfolio2-isotope -m-[10px] sm:-m-[15px]">
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
                  <img class="w-full object-cover" :src="item.image" alt="Portfolio" />
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
                  <img class="w-full object-cover" :src="item.image" alt="Portfolio" />
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

          <div v-if="activeTab === 2" class="portfolio2-isotope -m-[10px] sm:-m-[15px]">
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
          <div v-if="activeTab === 3" class="portfolio2-isotope -m-[10px] sm:-m-[15px]">
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
                  <img class="w-full object-cover" :src="item.image" alt="Portfolio" />
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
          <div v-if="activeTab === 4" class="portfolio2-isotope -m-[10px] sm:-m-[15px]">
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
          <div v-if="activeTab === 5" class="portfolio2-isotope -m-[10px] sm:-m-[15px]">
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
                  <img class="w-full object-cover" :src="item.image" alt="Portfolio" />
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
    </div>

    <div class="s-py-50-100 mt-20">
      <div class="container-fluid max-w-[1720px] mx-auto">
        <div
          class="flex justify-center items-center mb-[40px] md:mb-12"
          data-aos="fade-up"
        >
          <div>
            <span
              class="text-primary font-normal text-6xl sm:text-7xl font-secondary block -ml-5 leading-normal sm:leading-normal"
            >
            </span>
            <h6
              class="font-normal leading-none tracking-[.5em] sm:tracking-[1em] uppercase"
            >
              <!-- LATEST  -->
            </h6>
          </div>
        </div>
        <BlogThree />
      </div>
    </div>

    <div class="bg-[#f5f5f5] dark:bg-dark-secondary s-py-100">
      <div class="container max-w-[1365px] mx-auto">
        <div class="text-center mb-8 md:mb-12 max-w-[548px] mx-auto" data-aos="fade-up">
          <img :src="like" alt="" class="mx-auto size-16" />
          <h2 class="dark:text-white font-bold leading-none mt-4">Testimonial</h2>
          <p class="mt-3 md:mt-4">
            Temukan apa yang dikatakan pelanggan kami tentang kami. Kisah nyata,
            pengalaman nyata – cari tahu mengapa mereka memilih kami.
          </p>
        </div>
        <ClientOne />
      </div>
    </div>

    <FooterSix />

    <!-- <ScrollToTop /> -->
    <ScrollToTop />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import NavbarOne from "@/components/navbar/navbar-one.vue";
import like from "@/assets/img/svg/like.svg";
import ClientOne from "@/components/client-one.vue";

// import BlogSix from '@/components/blog/blog-six.vue';
// import PartnerOne from '@/components/partner/partner-one.vue';
import FooterSix from "@/components/footer/footer-six.vue";
import ScrollToTop from "@/components/scroll-to-top.vue";
import { categoryOne } from "@/data/data";
import chair from "@/assets/img/svg/chair.svg";
// import { Swiper, SwiperSlide } from "swiper/vue";
// import { Autoplay, Navigation } from "swiper/modules";

// import FooterOne from "@/components/footer/footer-one.vue";

// import bg from "@/assets/img/shortcode/breadcumb.jpg";
// import image1 from "@/assets/img/gallery/portfolio-03/portfolio-03.jpg";
import BlogThree from "@/components/blog/blog-three.vue";
import image2 from "@/assets/img/gallery/portfolio-03/portfolio-02.jpg";
import image3 from "@/assets/img/gallery/portfolio-03/portfolio-03.jpg";
import image4 from "@/assets/img/gallery/portfolio-03/portfolio-04.jpg";

import banner1 from "@/assets/img/banner/MODIFIEDPAPASANCHAIR.png";
import banner2 from "@/assets/img/banner/ROYALARMCHAIR.png";
// import banner3 from "@/assets/img/shortcode/carousel/Summer.png";

import { portfolioTwo } from "@/data/portfolio-data";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

import Aos from "aos";

// import { productList } from '@/data/data';
import { servicesData } from "@/data/index-three";

const activeTab = ref(1);

onMounted(() => {
  console.log("test");

  Aos.init();
});
</script>
