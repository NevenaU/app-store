<template>
  <div>
    <label for="search">Search:</label>
    <input type="text" v-model="searchValue" />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in getProducts" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>
            <input type="number" min="0" v-model="product.quantity" />
          </td>
          <td>
            <router-link :to="`/products/${product.id}`"
              >Buy</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import productService from "../../services/ProductService";
export default {
  computed: {
    getProducts() {
      return this.searchValue ? this.filteredProducts : this.products;
    },
  },
  data() {
    return {
      products: productService.getAllProducts(),
      searchValue: "",
      filteredProducts: [],
    };
  },
  watch: {
    searchValue: function (newValue) {
      this.filteredProducts = this.products.filter(({ title }) =>
        title.toLowerCase().includes(newValue.toLowerCase())
      );
    },
  },
};
</script>

<style>
</style>