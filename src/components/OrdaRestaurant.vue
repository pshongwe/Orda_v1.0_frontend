<template>
  <div>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
        <title>Self Service Order</title>
    </head>
<main id="app">
    <body> 
            <section class="items">
                <h4>Pick your items</h4>
                <div class="product selected">
                    <div class="photo">
                        <img src="../assets/img/big-mac.png">
                    </div>
                    <div class="description">
                        <span class="name">Big Mac</span>
                        <span class="price">$ 5.99</span>
                        <div class="quantity-area">
                            <button>-</button>
                            <span class="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <div class="photo">
                        <img src="../assets/img/mc-chicken.png">
                    </div>
                    <div class="description">
                        <span class="name">Mc Chicken</span>
                        <span class="price">$ 4.99</span>
                        <div class="quantity-area">
                            <button>-</button>
                            <span class="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <div class="photo">
                        <img src="../assets/img/double-cb.png">
                    </div>
                    <div class="description">
                        <span class="name">Double Cheese Burger</span>
                        <span class="price">$ 2.99</span>
                        <div class="quantity-area">
                            <button>-</button>
                            <span class="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <div class="photo">
                        <img src="../assets/img/fries.png">
                    </div>
                    <div class="description">
                        <span class="name">Fries</span>
                        <span class="price">$ 2.99</span>
                        <div class="quantity-area">
                            <button>-</button>
                            <span class="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <div class="photo">
                        <img src="../assets/img/nuggets.png">
                    </div>
                    <div class="description">
                        <span class="name">Mc Nuggets</span>
                        <span class="price">$ 3.49</span>
                        <div class="quantity-area">
                            <button>-</button>
                            <span class="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <div class="photo">
                        <img src="../assets/img/salad.png">
                    </div>
                    <div class="description">
                        <span class="name">Salad</span>
                        <span class="price">$ 2.79</span>
                        <div class="quantity-area">
                            <button>-</button>
                            <span class="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <div class="photo">
                        <img src="../assets/img/cola.png">
                    </div>
                    <div class="description">
                        <span class="name">Coke</span>
                        <span class="price">$ 1.99</span>
                        <div class="quantity-area">
                            <button>-</button>
                            <span class="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <div class="photo">
                        <img src="../assets/img/lipton.png">
                    </div>
                    <div class="description">
                        <span class="name">Ice Tea</span>
                        <span class="price">$ 1.99</span>
                        <div class="quantity-area">
                            <button>-</button>
                            <span class="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <div class="photo">
                        <img src="../assets/img/water.png">
                    </div>
                    <div class="description">
                        <span class="name">Water</span>
                        <span class="price">$ 1.49</span>
                        <div class="quantity-area">
                            <button>-</button>
                            <span class="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="summary">
                <strong>Order Details</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1x Big Mac</td>
                            <td>5.99</td>
                        </tr>
                        
                        <tr>
                            <th>Total</th>
                            <th>5.99</th>
                        </tr>
                    </tbody>
                </table>
            </section>


    </body> 
</main>
  </div> 
</template>

<script>
export default {
  name: 'OrdaRestaurant'
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
align-items:flex-start;
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

section.items  .description .price {
font-weight: bold;
margin: 4px auto;
}

section.items  .description .quantity-area {
margin: 8px auto;
height: 14px;
}

section.items  .description .quantity-area button {
width: 16px;
height: 16px;
display: inline-flex;
justify-content: center;
align-items: center;
cursor: pointer;
}

section.items  .description .quantity-area .quantity {
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