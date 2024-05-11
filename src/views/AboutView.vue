<template>
  <div class="about">
    <img alt="OrdaSys Logo" src="@/assets/logo.png">
    <About />
  </div>
</template>

<script>
import About from '@/components/OrdaAbout.vue'

export default {
  name: 'AboutView',
  components: {
    About
  }
}
</script>
