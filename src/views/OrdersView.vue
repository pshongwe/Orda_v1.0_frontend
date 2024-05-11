<template>
    <div class="orders">
      <Orders />
    </div>
  </template>
  
  <script>
  import Orders from '@/components/OrdaOrders.vue'
  
  export default {
    name: 'OrdersView',
    components: {
        Orders
    }
  }
  </script>
  