<template>
  <div>
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
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import productService from '../../services/ProductService'
export default {
  computed: {
		getProducts() {
			return this.products
		}
	},
	data() {
		return {
			products: productService.getAllProducts()
		}
	}
};
</script>

<style>
</style>