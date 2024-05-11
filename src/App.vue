<template>
  <img src="@/assets/logo.png" alt="OrdaSys Logo" class="logo" @mouseover="hover = true" @mouseleave="hover = false">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/orders">Orders</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.logo {
  transition: transform 0.5s ease;
  transform: scale(0.9);
  opacity: 0.7;
}
.logo:hover {
  transform: scale(1.1); /* Scale up the logo on hover */
}
</style>
