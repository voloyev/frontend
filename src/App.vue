<template>
  <div>
    <nav-comp></nav-comp>
    <ul v-if="products && products.length">
      <li v-for="product in products" v-bind:key="product">
        <p>
          Title
          <rails-add :title="product.title" :link="product.id"></rails-add>
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
import RailsAddition from "./components/RailsAddition";

export default {
  data() {
    return {
      products: [],
      errors: []
    };
  },
  components: {
    "nav-comp": Nav,
    "rails-add": RailsAddition
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
