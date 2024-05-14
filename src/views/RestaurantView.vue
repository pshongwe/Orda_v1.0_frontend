<template>
    <div class="restaurant">
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