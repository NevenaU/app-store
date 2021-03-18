<template>
  <div>
    <h1>Customers</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.email }}</td>
          <button @click="removeCustomer(customer.id)" type="button" class="btn btn-danger">Remove</button>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import customerService from '../services/CustomerService.js'
export default {
  data() {
    return {
      customers: customerService.getAllCustomers(),
    };
  },
  methods: {
    removeCustomer(customerId) {
      customerService.removeCustomer(customerId)

    }
  }
};
</script>

<style>
</style>