<template>
    <div>
      <main id="app">
        <section class="items">
          <h4>Pick your items</h4> 
          <div v-for="product in products" :key="product.name"
               class="product"
               @click="toggleActive(product)"
               :class="{selected: product.active}">
            <div class="photo">
              <img :src="product.photo" :alt="product.name">
            </div>
            <div class="description">
              <span class="name">{{ product.name }}</span>
              <span class="price">$ {{ product.price }}</span>
              <div class="quantity-area" v-if="product.active">
                <button :disabled="product.quantity <= 1" @click.stop="product.quantity--">-</button>
                <span class="quantity">{{ product.quantity }}</span>
                <button @click.stop="product.quantity++">+</button>
              </div>
            </div>
          </div>
        </section>
  
        <section class="summary" v-if="total() > 0">
          <strong>Order Details</strong>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in activeProducts" :key="'summary-' + product.name">
                <td>{{ product.quantity + 'x ' + product.name }}</td>
                <td>${{ (product.quantity * product.price).toFixed(2) }}</td>
              </tr>
              <tr>
                <th>Total</th>
                <th>${{ total() }}</th>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div> 
  </template>
  
  <script>
  export default {
    name: 'OrdaRestaurant',
    data() {
      return {
        products: [
          {
            "photo": "/img/big-mac.png",
            "name": "Big Mac",
            "price": 5.99,
            "active": false,
            "quantity": 1
          },
          {
            "photo": "/img/mc-chicken.png",
            "name": "Mc Chicken",
            "price": 4.99,
            "active": false,
            "quantity": 1
          },
          {
            "photo": "/img/double-cb.png",
            "name": "Double Cheese Burger",
            "price": 2.99,
            "active": false,
            "quantity": 1
          },
          {
            "photo": "/img/fries.png",
            "name": "Fries",
            "price": 2.99,
            "active": false,
            "quantity": 1
          },
          {
            "photo": "/img/nuggets.png",
            "name": "Mc Nuggets",
            "price": 3.49,
            "active": false,
            "quantity": 1
          },
          {
            "photo": "/img/salad.png",
            "name": "Salad",
            "price": 2.79,
            "active": false,
            "quantity": 1
          },
          {
            "photo": "/img/cola.png",
            "name": "Coke",
            "price": 1.99,
            "active": false,
            "quantity": 1
          },
          {
            "photo": "/img/lipton.png",
            "name": "Ice Tea",
            "price": 1.99,
            "active": false,
            "quantity": 1
          },
          {
            "photo": "/img/water.png",
            "name": "Water",
            "price": 1.49,
            "active": false,
            "quantity": 1
          }
        ]
      }
    },
    computed: {
      activeProducts() {
        return this.products.filter(p => p.active);
      }
    },
    methods: {
      toggleActive(product) {
        product.active = !product.active;
      },
      total() {
        return this.activeProducts.reduce((acc, product) => {
          return acc + product.price * product.quantity;
        }, 0).toFixed(2);
      }
    }
  }
  </script>
  
  <style scoped>
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }
  
  main > section.items h4 {
    text-align: center;
    margin-top: 0;
    width: 100%;
  }
  
  main {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-top: 20px;
  }
  
  main > section.items {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid lightgrey;
    padding: 20px;
    max-width: 500px;
    min-width: 300px;
    justify-content: center;
  }
  
  section.items .product {
    border: 1px solid lightgrey;
    margin: 6px;
    flex: 0 0 calc(33.333% - 24px);
    cursor: pointer;
    text-align: center;
  }
  
  section.items .product.selected {
    border: 2px solid rgb(29, 134, 233);
  }
  
  section.items .photo img {
    max-width: 90px;
  }
  
  section.items .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 11px;
    line-height: 15px;
  }
  
  section.items .description .price {
    font-weight: bold;
    margin: 4px auto;
  }
  
  section.items .description .quantity-area {
    margin: 8px auto;
    height: 14px;
  }
  
  section.items .description .quantity-area button {
    width: 16px;
    height: 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  section.items .description .quantity-area .quantity {
    font-weight: bold;
    margin: 0 4px;
  }
  
  section.summary {
    background-color: rgb(245, 245, 245);
    padding: 20px;
    min-height: 200px;
    min-width: 200px;
    text-align: center;
  }
  
  section.summary table {
    width: 100%;
    padding-top: 12px;
    font-size: 11px;
    margin: auto;
  }
  
  section.summary table tbody tr:last-of-type th {
    border-top: 1px solid black;
    padding-top: 4px;
  }
  </style>
  