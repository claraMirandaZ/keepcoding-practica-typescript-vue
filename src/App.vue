<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/detail">Detail</router-link> |
    <router-link to="/profile">Profile</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: blueviolet;
}

nav {
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
