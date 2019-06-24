<template>
  <div>
    <nav-comp></nav-comp>
    <ul v-if="products && products.length">
      <li v-for="product in products" v-bind:key="product">
        <p>
          <strong>Title {{ decorateProduct(product.title) }}</strong>
        </p>
        <p>desc {{ product.description }}</p>
        <p>price {{ product.price }}</p>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li v-for="error of errors" v-bind:key="error">{{ error.message }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Nav from "./components/Nav";
import decorateProduct from "./utils/ProductsUtils";

export default {
  data() {
    return {
      products: [],
      errors: []
    };
  },
  components: {
    "nav-comp": Nav
  },

  mounted() {
    axios
      .get("http://localhost:3000/api/v1/products")
      .then(response => {
        this.products = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>
