<div class="product-dtls-slider">
  <!-- Main Image Display -->
  <div v-for="(product, index) in relatedProducts" :key="product.id">
    <img
      :src="product.image"
      :alt="product.name"
      class="w-full"
      :class="{ 'hidden': selectedIndex !== index }"
    />
  </div>
</div>

<!-- Thumbnail Navigation -->
<div class="product-dtls-nav">
  <div 
    v-for="(product, index) in relatedProducts" 
    :key="product.id"
    class="cursor-pointer"
    @click="selectedIndex = index"
  >
    <img
      :src="product.image"
      :alt="product.name"
      class="mb-2 w-20 h-20 object-cover"
      :class="{ 'border-2 border-primary': selectedIndex === index }"
    />
  </div>
</div>