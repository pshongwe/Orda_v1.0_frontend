<template>
  <div class="about">
    <img alt="OrdaSys Logo" src="@/assets/logo.png">
    <About />
  </div>
</template>

<script>
// @ is an alias to /src
import About from '@/components/OrdaAbout.vue'

export default {
  name: 'HomeView',
  components: {
    About
  }
}
</script>
