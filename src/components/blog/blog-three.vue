<template>
  <div class="">
    <div
      class="grid md:grid-cols-2 xl:grid-cols-2 relative gap-7 md:gap-9"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div
        v-for="(item, index) in blogData"
        :key="index"
        class="group sm:flex items-center justify-center mx-auto w-full max-w-[900px] sm:max-w-none"
      >
        <!-- Gambar -->
        <router-link to="#" class="sm:w-1/2 overflow-hidden block">
          <img
            class="duration-300 transform scale-100 group-hover:scale-110 w-full"
            :src="item.image"
            alt="blog-card"
          />
        </router-link>

        <!-- Konten -->
        <div
          class="bg-snow dark:bg-dark-secondary p-5 md:p-6 sm:ml-[-3%] sm:w-[60%] relative z-10 text-center sm:text-left"
        >
          <ul
            class="flex items-center justify-center sm:justify-start gap-[10px] flex-wrap"
          >
            <li class="text-[15px] leading-none dark:text-white">{{ item.date }}</li>
            <li>
              <router-link
                to=""
                class="inline-block text-title font-medium text-[15px] leading-none py-2 px-[10px] rounded-md bg-primary-midum"
                >{{ item.tag }}</router-link
              >
            </li>
          </ul>
          <h5 class="mt-3 font-medium text-xl dark:text-white leading-[1.5]">
            <router-link to="" class="text-underline">{{ item.title }}</router-link>
          </h5>
          <div class="text-center mt-7 md:mt-12">
            <router-link to="" class="btn btn-outline" data-text="beli sekarang">
              <!-- <router-link to="/shop-v1" class="btn btn-outline" data-text="All Category"> -->
              <span>beli sekarang</span>
            </router-link>
          </div>
        </div>

        <!--  -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { blogData } from "@/data/index-three";
</script>
