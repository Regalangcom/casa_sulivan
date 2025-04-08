<template>
  <div>
    <NavbarOne />

    <div
      class="flex items-center gap-4 flex-wrap bg-overlay p-14 sm:p-16 before:bg-title before:bg-opacity-70"
      :style="{ backgroundImage: 'url(' + bg + ')' }"
    >
      <div class="text-center w-full">
        <h2 class="text-white text-8 md:text-[40px] font-normal leading-none text-center">
          About Us
        </h2>
        <ul
          class="flex items-center justify-center gap-[10px] text-base md:text-lg leading-none font-normal text-white mt-3 md:mt-4 flex-wrap"
        >
          <li><router-link to="/">Home</router-link></li>
          <li>/</li>
          <li class="text-primary">About</li>
        </ul>
      </div>
    </div>

    <div class="s-pb-100 pt-12 md:pt-16" data-aos="fade-up">
      <div class="container-fluid">
        <div class="max-w-[1720px] mx-auto flex flex-col-reverse xl:grid xl:grid-cols-2">
          <div
            class="lg:bg-[#F8F8F9] lg:dark:bg-dark-secondary lg:pr-10 2xl:pr-0 relative"
          >
            <div class="h-full block">
              <!-- <div v-if="activeTab === 1"> -->
              <img class="object-cover w-full" :src="banner1" alt="about" />
              <!-- </div> -->
            </div>
            <div
              class="absolute xl:bottom-[50%] bottom-0 left-[50%] xl:right-0 translate-x-[-50%] 2xl:translate-x-[83%] xl:translate-x-[73%] translate-y-[115%] xl:translate-y-[50%] z-[9999] xl:inline-block flex gap-1"
            >
              <!-- <div @click="activeTab = 2">
                <img
                  class="object-cover h-[70px] w-[70px] md:h-[140px] md:w-[140px] lg:h-[140px] lg:w-[140px] xl:my-2 my-0"
                  :class="activeTab === 2 ? 'border-[#bb976d] border-4' : ''"
                  :src="banner2"
                  alt="about"
                />
              </div> -->
            </div>
          </div>
          <div
            class="flex items-center py-8 sm:py-12 px-5 sm:px-12 md:px-8 lg:pr-12 lg:pl-16 2xl:pl-[160px] bg-[#F8F8F9] dark:bg-dark-secondary"
          >
            <div class="lg:max-w-[600px]">
              <h3 class="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
                Our Story Casa Sulivan
              </h3>
              <p class="mt-3 text-base sm:text-lg">
                A Casa Sulivan was formed in 2014 by Henry and Tania Sulivan.Henry has
                been working with his father’s furniture manufacturing business for 25
                years, whereas Tania has experience as a Regional Marketing Manager in a
                German-owned furniture and manufacturer, positioned in Australia & New
                Zealand. <br />
                <br />
                Since the beginning, it is clear that the company offers distinctive
                customized furniture for commercial and residential as well as hospitality
                projects in both local and International market, with clients as far as
                Dubai, Germany, and Australia <br />
                <br />
                Despite relatively new, Casa Sulivan is run by old hands, our staff brings
                more than 25 years of experience in furniture manufacturing and exports.
                <br />
                <br />
                Casa Sulivan have team members who are not only skilled and motivated, but
                takes great pride in their work and committed to produce custom quality
                products. <br />
                <br />
                Casa Sulivan aims to bring great quality furniture with competitive
                prices, while staying ahead in the changing market.
              </p>
              <p class="mt-3 text-base sm:text-lg">
                <!-- Over the years, our dedication to innovation and customer satisfaction has
                fueled our growth and earned us a reputation for excellence. From humble
                beginnings, we've grown into a trusted name in the industry, known for
                delivering furniture that exceeds expectations. -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="s-pb-100 pt-14 md:pt-40 lg:pt-0">
      <div class="container-fluid">
        <div class="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up">
          <div>
            <img :src="like" class="mx-auto size-16" alt="" />
          </div>
          <h3 class="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
            Why You Choose Us
          </h3>
          <p class="mt-3">
            Choose us for exceptional quality, We prioritize your satisfaction by offering
            premium products and a seamless shopping experience.
          </p>
        </div>
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
      </div>
    </div>

    <div class="container-fluid" data-aos="fade-up">
      <div
        class="bg-overlay before:bg-title before:bg-opacity-20 h-64 sm:h-96 lg:h-[650px] flex items-center justify-center max-w-[1720px] mx-auto"
        :style="{ backgroundImage: 'url(' + bg2 + ')' }"
      >
        <router-link
          to=""
          @click="open = !open"
          class="popup-video w-12 sm:w-[70px] h-12 sm:h-[70px] rounded-full bg-white dark:bg-title flex items-center justify-center"
        >
          <svg
            class="fill-current text-title dark:text-white"
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.58357 0.369445C1.15676 -0.497057 0 0.212792 0 1.95367V14.8006C0 16.5432 1.15676 17.2521 2.58357 16.3864L13.1895 9.94678C14.6168 9.07997 14.6168 7.67561 13.1895 6.80901L2.58357 0.369445Z"
            />
          </svg>
        </router-link>
      </div>
    </div>

    <div
      v-if="open"
      class="fixed top-0 left-0 bg-black bg-opacity-50 w-full h-full z-[99999]"
    >
      <div class="flex items-center justify-center h-full">
        <div
          class="relative w-[300px] h-[200px] sm:w-[600px] sm:h-[450px] md:w-[750px] md:h-[500px]"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"
          >
          </iframe>
          <div
            @click="open = !open"
            class="absolute top-[-10px] right-[-10px] cursor-pointer w-8 h-8 bg-primary bg-opacity-70 text-center"
          >
            <i class="fa-solid fa-xmark text-white text-[20px] mt-1"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="s-py-100">
      <div class="container-fluid">
        <div class="max-w-xl mx-auto mb-8 md:mb-12 text-center" data-aos="fade-up">
          <div>
            <img :src="hand" class="mx-auto size-16" alt="" />
          </div>
          <h3 class="font-medium leading-none mt-4 md:mt-6 text-2xl md:text-3xl">
            Trusted Partner
          </h3>
          <p class="mt-3">
            Count on our trusted partnerships to deliver excellence. Collaborating with
            industry leaders ensures top-quality products.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <PartnerOne />
        </div>
      </div>
    </div> -->

    <FooterOne />

    <ScrollToTop />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

import NavbarOne from "@/components/navbar/navbar-one.vue";
import FooterOne from "@/components/footer/footer-six.vue";
import ScrollToTop from "@/components/scroll-to-top.vue";

import bg from "@/assets/img/shortcode/breadcumb.jpg";
import bg2 from "@/assets/img/about/video-bg.jpg";
import like from "@/assets/img/svg/like.svg";
import banner1 from "@/assets/img/pulman/pulman1(1).png";

import Aos from "aos";
// import { featureOne } from "@/data/data";
import { servicesData } from "@/data/index-three";

// const activeTab = ref(1);
const open = ref(false);

onMounted(() => {
  Aos.init();
});
</script>
