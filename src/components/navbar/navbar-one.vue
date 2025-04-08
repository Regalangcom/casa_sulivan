<template>
  <div
    class="header-area default-header relative z-50 bg-white dark:bg-title"
    :class="scroll ? 'sticky-header' : ''"
  >
    <div class="container-fluid">
      <div
        class="flex items-center justify-between gap-x-6 max-w-[1720px] mx-auto relative py-[10px] sm:py-4 lg:py-0"
      >
        <router-link class="cursor-pointer block" to="/" aria-label="casa sulivan">
          <img :src="logoLight" alt="" class="dark:block w-[90px] md:w-[200px]" />
        </router-link>

        <div
          class="main-menu absolute z-50 w-full lg:w-auto top-full left-0 lg:static bg-white dark:bg-title lg:bg-transparent lg:dark:bg-transparent px-5 sm:px-[30px] py-[10px] sm:py-5 lg:px-0 lg:py-0"
          :class="toggle ? 'active' : ''"
        >
          <ul
            class="text-lg leading-none text-title dark:text-white lg:flex lg:gap-[30px]"
          >
            <li class="relative" :class="['/'].includes(current) ? 'active' : ''">
              <!-- '/index-v2',
                  '/index-v3',
                  '/index-v4',
                  '/index-v5',
                  '/index-v6', -->
              <router-link to="/">Home</router-link>
              <!-- <ul
                class="sub-menu lg:absolute z-50 lg:top-full lg:left-0 lg:min-w-[220px] lg:invisible lg:transition-all lg:bg-white lg:dark:bg-title lg:py-[15px] lg:pr-[30px]"
              >
                <li :class="current === '/' ? 'active' : ''">
                  <router-link to="/" class="menu-item">Home Minimal</router-link>
                </li>
                <li :class="current === '/index-v2' ? 'active' : ''">
                  <router-link to="/index-v2" class="menu-item">Home Stylish</router-link>
                </li>
                <li :class="current === '/index-v3' ? 'active' : ''">
                  <router-link to="/index-v3" class="menu-item"
                    >Home Accessories</router-link
                  >
                </li>
                <li :class="current === '/index-v4' ? 'active' : ''">
                  <router-link to="/index-v4" class="menu-item"
                    >Home Collection</router-link
                  >
                </li>
                <li :class="current === '/index-v5' ? 'active' : ''">
                  <router-link to="/index-v5" class="menu-item">Home Luxury</router-link>
                </li>
                <li :class="current === '/index-v6' ? 'active' : ''">
                  <router-link to="/index-v6" class="menu-item">Home Retro</router-link>
                </li>
              </ul> -->
            </li>
            <li :class="['/product'].includes(current) ? 'active' : ''">
              <router-link to="#">Product</router-link>
              <div
                class="mega-menu lg:absolute z-50 lg:top-full lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:max-w-[490px] lg:w-full lg:bg-white lg:dark:bg-title lg:px-[30px] lg:py-[15px] lg:flex lg:items-start lg:justify-between gap-[30px] lg:invisible lg:transition-all lg:duration-300"
              >
                <div
                  class="lg:grid lg:grid-cols-1 lg:items-start gap-x-5 2xl:gap-x-[25px] lg:flex-1"
                >
                  <div class="megamenu-item">
                    <ul>
                      <li :class="current === '/' ? 'active' : ''">
                        <router-link to="/chair">Chair</router-link>
                      </li>
                      <li :class="current === '/' ? 'active' : ''">
                        <router-link to="/Sofa">Sofa</router-link>
                      </li>
                      <li :class="current === '/' ? 'active' : ''">
                        <router-link to="/Mirror">Mirror</router-link>
                      </li>
                      <li :class="current === '/' ? 'active' : ''">
                        <router-link to="/Lamp">Lamp</router-link>
                      </li>
                      <li :class="current === '/' ? 'active' : ''">
                        <router-link to="/all-product">All Products</router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="lg:py-[15px] lg:max-w-[280px] w-full hidden lg:block">
                  <router-link to="shop-v1.html">
                    <!-- <img :src="" alt="mega-menu-add" /> -->
                  </router-link>
                </div>
              </div>
            </li>
            <li :class="['/about'].includes(current) ? 'active' : ''">
              <router-link to="/about">About Us</router-link>
            </li>
            <li class="relative">
              <router-link to="/our-projects">Our Project</router-link>
            </li>

            <li class="relative">
              <router-link to="/contact">Contact Us</router-link>
            </li>
            <li :class="current === '/contact' ? 'active' : ''">
              <!-- <router-link to="/">Contact</router-link> -->
            </li>
          </ul>
        </div>

        <NavMenuOne :toggle="toggle" @toggle-change="toggle = $event" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

// import logoDark from "@/assets/img/svg/logo.svg";
import logoLight from "@/assets/img/Casa-Sulivan-logo-new-brown.png";

import NavMenuOne from "./nav-menu-one.vue";

// import add from "@/assets/img/thumb/add.png";
import { useRoute } from "vue-router";

const toggle = ref(false);

const router = useRoute();
const current = ref(router.path);

const scroll = ref(false);

const handleScroll = () => {
  if (window.scrollY >= 50) {
    scroll.value = true;
  } else {
    scroll.value = false;
  }
};

onMounted(() => {
  window.scrollTo(0, 0);
  window.addEventListener("scroll", handleScroll);
});
</script>
