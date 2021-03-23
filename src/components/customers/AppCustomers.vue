<template>
  <div>
    <add-customer @create-customer="createCustomer"></add-customer>
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
          <button
            @click="removeCustomer(customer.id)"
            type="button"
            class="btn btn-danger"
          >
            Remove
          </button>
          <router-link
            class="btn btn-class-primary"
            :to="`/customers/${customer.id}`"
            >Latest Purchases</router-link
          >
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AddCustomer from "./AddCustomer";
import customerService from "../../services/CustomerService.js";
export default {
  components: {
    AddCustomer,
  },
  data() {
    return {
      customers: customerService.getAllCustomers(),
    };
  },
  methods: {
    removeCustomer(customerId) {
      customerService.removeCustomer(customerId);
    },
    createCustomer(formData) {
      customerService.addNewCustomer(formData);
    },
  },
};
</script>

<style>
</style>