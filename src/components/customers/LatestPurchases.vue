<template>
  <ul class="list-group">
    <li>{{customer.id}}</li>
    <li>{{customer.firstName}}</li>
    <li>{{customer.lastName}}</li>
    <li>{{customer.email}}</li>
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