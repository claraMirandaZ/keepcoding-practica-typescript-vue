<template>
  <div class="product-item">
    <img :src="product.images[0]" class="card-img-top" :alt="product.title" />
    <h2>{{ product.title }} ({{ product.id }})</h2>
    <p>Price: {{ product.price }}$</p>
    <!-- <a @click="$emit('goDetail', product)">Detail</a> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Product } from '../models/product';

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>
.product-item {
  margin-top: 20px;
  margin-left: 20px;
  width: 300px;
  display: flex;
}

a {
  cursor: pointer;
}
</style>
