<template>
  <div class="home">
    <img alt="OrdaSys Logo" src="@/assets/logo.png">
    <Landing/>
  </div>
</template>

<script>
import Landing from '@/components/LandingPage.vue'

export default {
  name: 'HomeView',
  components: {
    Landing
  }
}
</script>
