<template>
  <div>
    <!-- <div v-if="!isLoading" class="detailView"> -->
    <h1>This is the product detail</h1>
    <ProductItem />
  </div>
  <!-- <div v-else>Loading info...</div> -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useProducts from '../composables/useProducts';
// import CustomCard from '../components/CustomCard.vue';

export default defineComponent({
  name: 'DetailView',
  // components: {
  //   CustomCard,
  // },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { product, fetchProductById, isLoading } = useProducts();
    fetchProductById(props.id);
    let activePic = ref();
    const changeActivePic = (index: number) => {
      activePic.value = product.value.images[index];
    };
    return {
      product,
      isLoading,
      activePic,
      changeActivePic,
    };
  },
});
</script>

<style scoped>
h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rebeccapurple;
}
</style>
