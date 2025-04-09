import { createRouter, createWebHistory } from 'vue-router'

import IndexSix from '@/views/index/index-six.vue'
import AboutUs from '@/views/inner-pages/about-us.vue'
import PricingPage from '@/views/inner-pages/pricing-page.vue'
import OurProjects from '@/views/inner-pages/our-project.vue'
import OurProjects2 from '@/views/inner-pages/our-project2.vue'
import TeamPage from '@/views/inner-pages/team-page.vue'
import OurClients from '@/views/inner-pages/our-clients.vue'
import PortfolioV1 from '@/views/portfolio/portfolio-v1.vue'
import PortfolioV2 from '@/views/portfolio/portfolio-v2.vue'
import PortfolioV3 from '@/views/portfolio/portfolio-v3.vue'
import PortfolioDetailsV1 from '@/views/portfolio/portfolio-details-v1.vue'
import PortfolioDetailsV2 from '@/views/portfolio/portfolio-details-v2.vue'

import ShopV1 from '@/views/shop/shop-v1.vue'
import ProductDetails from '@/views/shop/product-details.vue'
import BlogV1 from '@/views/blog/blog-v1.vue'
import BlogV2 from '@/views/blog/blog-v2.vue'
import BlogDetailsV1 from '@/views/blog/blog-details-v1.vue'
import BlogDetailsV2 from '@/views/blog/blog-details-v2.vue'
import BlogDetailsV3 from '@/views/blog/blog-details-v3.vue'
import ContactPage from '@/views/inner-pages/contact-page.vue'
import ProductCategory from '@/views/shop/product-category.vue'

const routes = [
  // {path: '/',component: IndexOne},
  // {path: '/index-v2',component: IndexTwo},
  // {path: '/index-v3',component: IndexThree},
  // {path: '/index-v4',component: IndexFour},
  // {path: '/index-v5',component: IndexFive},
  {path: '/',component: IndexSix},
  {path: '/about',component: AboutUs},
  {path: '/pricing',component: PricingPage},
  {path: '/our-project',component: OurProjects},
  {path: '/our-projects',component: OurProjects2},
  {path: '/team',component: TeamPage},
  {path: '/our-clients',component: OurClients},
  {path: '/portfolio-v1',component: PortfolioV1},
  {path: '/portfolio-v2',component: PortfolioV2},
  {path: '/portfolio-v3',component: PortfolioV3},
  {path: '/portfolio-details-v1',component: PortfolioDetailsV1},
  {path: '/portfolio-details-v1/:id',component: PortfolioDetailsV1},
  {path: '/portfolio-details-v2',component: PortfolioDetailsV2},
  {path: '/portfolio-details-v2/:id',component: PortfolioDetailsV2},
  // {path: '/payment-confirmation',component:PaymentConfirmation},
  // {path: '/payment-success',component:PaymentSuccess},
  // {path: '/payment-failure',component:PaymentFailure},
  {path: '/shop-v1',component:ShopV1},
  {path: '/product-details',component:ProductDetails},
  {path: '/product-details/:id',component:ProductDetails},
  // {path: '/cart',component:ShopCart},
  // {path: '/checkout',component:CheckoutPage},
  {path: '/blog-v1',component:BlogV1},
  {path: '/blog-v2',component:BlogV2},
  {path: '/blog-details-v1',component:BlogDetailsV1},
  {path: '/blog-details-v1/:id',component:BlogDetailsV1},
  {path: '/blog-details-v2',component:BlogDetailsV2},
  {path: '/blog-details-v2/:id',component:BlogDetailsV2},
  {path: '/blog-details-v3',component:BlogDetailsV3},
  {path: '/blog-details-v3/:id',component:BlogDetailsV3},
  // {path: '/blog-tag',component:BlogTag},
  {path: '/contact',component:ContactPage},
  {path: '/product-category',component:ProductCategory},
  {path: '/product-category/:slug',component:ProductCategory},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
