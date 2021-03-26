<template>
  <ul class="list-group">
		<li v-for="(product, index) in customer.cart" :key="index" class="list-group-item">
			{{product.title}}
		</li>
	</ul>
</template>

<script>
import customerService from "../../services/CustomerService";
export default {
  name: "LatestPurchases",
  computed: {
    customer() {
      const id = parseInt(this.$route.params.id);
      return customerService.getCustomerById(id);
    },
  },
};
</script>

<style>
</style>