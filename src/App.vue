<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'AppComponent',
  components: {
    NavBar,
  },
  // computed: {
  //   notLogin() {
  //     return this.$route.path !== '/';
  //   },
  // },
});
</script>

<style></style>
