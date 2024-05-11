<template>
    <div class="restaurant">
      <img alt="OrdaSys Logo" src="@/assets/logo.png">
      <Restaurant />
    </div>
  </template>
  
  <script>
  import Restaurant from '@/components/OrdaRestaurant.vue'
  
  export default {
    name: 'RestaurantView',
    components: {
        Restaurant
    }
  }
  </script>
  