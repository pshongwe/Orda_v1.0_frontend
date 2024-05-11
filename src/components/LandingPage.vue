<!-- src/components/LandingPage.vue -->
<template>
    <div class="landing">
      <h1>Welcome to OrdaSys</h1>
      <p>Manage your orders efficiently and effortlessly.</p>
      <router-link to="/restaurant" class="btn btn-primary">Get Started</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage'
  }
  </script>
  
  <style scoped>
  .landing {
    text-align: center;
    padding: 50px 20px;
  }
  
  .landing h1 {
    margin-bottom: 20px;
  }
  
  .btn-primary {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  .btn-primary:hover {
    background-color: #2980b9;
  }
  </style>
  