<template>
  <nav>
    <router-link to="/products">Products</router-link> |
    <router-link to="/detail">Detail</router-link> |
    <router-link to="/profile">Profile</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
  // setup() {},
  props: {
    title: {
      type: String,
      required: true,
      default: "The peddler's store",
    },
    greeting: {
      type: String,
      default: 'Ah, Salaam',
    },
  },
});
</script>

<style scoped>
nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: blueviolet;
  padding: 30px;
}

nav a {
  font-weight: bolder;
  color: mediumpurple;
}

nav a.router-link-exact-active {
  color: greenyellow;
}
</style>
