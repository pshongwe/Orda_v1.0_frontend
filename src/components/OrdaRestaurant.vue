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
          <button @click="submitOrder" class="btn btn-primary">Submit Order</button>
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
            "quantity": 1,
            "item_id": "101"
          },
          {
            "photo": "/img/mc-chicken.png",
            "name": "Mc Chicken",
            "price": 4.99,
            "active": false,
            "quantity": 1,
            "item_id": "100"
          },
          {
            "photo": "/img/double-cb.png",
            "name": "Double Cheese Burger",
            "price": 2.99,
            "active": false,
            "quantity": 1,
            "item_id": "103"
          },
          {
            "photo": "/img/fries.png",
            "name": "Fries",
            "price": 2.99,
            "active": false,
            "quantity": 1,
            "item_id": "108"
          },
          {
            "photo": "/img/nuggets.png",
            "name": "Mc Nuggets",
            "price": 3.49,
            "active": false,
            "quantity": 1,
            "item_id": "102"
          },
          {
            "photo": "/img/salad.png",
            "name": "Salad",
            "price": 2.79,
            "active": false,
            "quantity": 1,
            "item_id": "104"
          },
          {
            "photo": "/img/cola.png",
            "name": "Coke",
            "price": 1.99,
            "active": false,
            "quantity": 1,
            "item_id": "100"
          },
          {
            "photo": "/img/lipton.png",
            "name": "Ice Tea",
            "price": 1.99,
            "active": false,
            "quantity": 1,
            "item_id": "106"
          },
          {
            "photo": "/img/water.png",
            "name": "Water",
            "price": 1.49,
            "active": false,
            "quantity": 1,
            "item_id": "107"
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
      },
      submitOrder() {
        const order = {
          customer_id: 'c1', // This should be dynamically set
          items: this.activeProducts.map(product => ({
            item_id: product.item_id, // This should be the actual item ID
            name: product.name,
            quantity: product.quantity,
            price: product.price
          })),
          total: parseFloat(this.total()),
          date: new Date().toISOString(),
          status: 'pending'
        };
        const url = new URL(process.env.VUE_APP_ORDERS_API);
        fetch(url.toString(), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(order)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Order submitted:', data);
        })
        .catch(error => {
          console.error('Error submitting order:', error);
        });
      }
    }
  }
  </script>

  <style scoped>
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
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
  