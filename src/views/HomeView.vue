<template>
  <div class="home">
    <img alt="OrdaSys Logo" src="@/assets/logo.png">
    <Landing/>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '@/components/LandingPage.vue'

export default {
  name: 'HomeView',
  components: {
    Landing
  }
}
</script>
