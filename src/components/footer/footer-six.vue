<template>
  <div class="s-pt-100 2xl:pb-[100px] bg-[#EBEBEB]">
    <div class="container max-w-1666 mx-auto">
      <div class="flex flex-col 2xl:flex-row items-start justify-between gap-10">
        <div
          class="max-w-[360px] 2xl:max-w-[298px] w-full text-left sm:text-center 2xl:text-left sm:mx-auto 2xl:mx-0"
        >
          <router-link class="cursor-pointer block" to="/" aria-label="casa sulivan">
            <img :src="logoDark" alt="" class="dark:hidden w-[110px] sm:w-[200px]" />
            <img
              :src="logoLight"
              alt=""
              class="dark:block hidden w-[120px] sm:w-[200px]"
            />
          </router-link>
          <p class="mt-[15px] hidden 2xl:block">
            <a href="https://shreethemes.in/" target="_blank" className="ms-1"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sint
              doloremque sunt sit corrupti facere cupiditate laboriosam itaque! Odio,
              inventore?</a
            >
            <br />
            © {{ year }} casa Sulivan <i class="fa-solid fa-heart text-red-600"></i>
          </p>
        </div>
        <div
          class="grid grid-cols-2 sm:grid-cols-3 2xl:max-w-[1050px] w-full lg:flex items-start justify-between gap-10"
        >
          <div class="lg:w-[300px] sm:order-7 2xl:order-none col-span-2 md:col-span-1">
            <!-- <h4 class="leading-none mb-5 md:mb-6 text-xl">Subscribe Newsletter</h4> -->
            <div class="flex flex-col gap-[10px] sm:items-start">
              <input
                class="bg-white dark:bg-dark-secondary w-full h-12 md:h-14 p-4 outline-none dark:text-white placeholder:text-title dark:placeholder:text-white"
                type="text"
                placeholder="Enter your email address"
              />
              <button class="btn btn-solid" data-text="Send Email">
                <span>send Email</span>
              </button>
            </div>
          </div>
          <div>
            <h4 class="leading-none mb-5 md:mb-6 text-xl"></h4>
            <!-- <ul class="text-title dark:text-white leading-none flex flex-col gap-4">
              <li
                v-for="(item, index) in footerLink1"
                :key="index"
                class="duration-100 hover:text-primary inline-block group"
              >
                <a class="text-underline-primary" :to="item.link">{{ item.name }}</a>
              </li>
            </ul> -->
          </div>
          <div>
            <h4 class="leading-none mb-5 md:mb-6 text-xl">Our service</h4>
            <ul class="text-title dark:text-white leading-none flex flex-col gap-4">
              <li
                v-for="(item, index) in footerLink2"
                :key="index"
                class="duration-100 hover:text-primary inline-block group"
              >
                <a class="text-underline-primary" :to="item.link">{{ item.name }}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="leading-none mb-5 md:mb-6 text-xl">Contact Us</h4>
            <ul class="text-title dark:text-white leading-none flex flex-col gap-4">
              <li class="duration-100 hover:text-primary gap-7 flex items-center group">
                <img :src="maps" alt="" class="w-5 h-5" />
                <a class="text-underline-primary">Jln.Majestic Hall, Tanggerang</a>
              </li>
              <li class="duration-100 hover:text-primary gap-7 flex items-center group">
                <img :src="phone" alt="" class="w-5 h-5" />
                <a class="text-underline-primary">No kantor</a>
              </li>
              <li class="duration-100 hover:text-primary gap-7 flex items-center group">
                <img :src="email" alt="" class="w-5 h-5" />

                <a class="text-underline-primary">Email</a>
              </li>
            </ul>
          </div>
          <div class="space-y-2">
            <h4 class="leading-none mb-5 md:mb-6 text-xl">Our gallery</h4>
            <div class="grid grid-cols-2 gap-2">
              <img
                src="../../assets/img/Casa-Sulivan.png"
                alt="Gallery 1"
                class="w-full h-20 object-cover rounded-md"
              />
              <img
                src="../../assets/img/Casa-Sulivan.png"
                alt="Gallery 2"
                class="w-full h-20 object-cover rounded-md"
              />
              <img
                src="../../assets/img/Casa-Sulivan.png"
                alt="Gallery 3"
                class="w-full h-20 object-cover rounded-md"
              />
              <img
                src="../../assets/img/Casa-Sulivan.png"
                alt="Gallery 4"
                class="w-full h-20 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import logoDark from "@/assets/img/icon/Casa-Sulivan.png";
import logoLight from "@/assets/img/svg/logo-light.svg";
import maps from "@/assets/img/icon/maps-and-flags.svg";
import email from "@/assets/img/icon/post-office.svg";
import phone from "@/assets/img/icon/phone.svg";
import { footerLink2 } from "@/data/nav-data";

const year = ref(new Date().getFullYear());
</script>
