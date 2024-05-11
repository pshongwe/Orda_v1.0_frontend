<template>
    <div class="orders">
      <img alt="OrdaSys Logo" src="@/assets/logo.png">
      <Orders />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Orders from '@/components/OrdaOrders.vue'
  
  export default {
    name: 'HomeView',
    components: {
        Orders
    }
  }
  </script>
  