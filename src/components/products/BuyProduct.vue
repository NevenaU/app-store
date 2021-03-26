<template>
  <div>
      <router-link v-if="products.quantity==0" to="/products">Go back to products</router-link>
      <p>{{products.title}}</p>
      <p>{{products.quantity}}</p>
      <select v-model="selectedCustomer">
          <option :value="customer.id" v-for="customer in customers" :key="customer.id">
            {{customer.firstName}}
            {{customer.lastName}}
          </option>
      </select>
      <button @click="confirmPurchase">Confirm</button>
      <router-link to="/products">Cancel</router-link>

  </div>
</template>

<script>
import customerService from "../../services/CustomerService";
import productService from '../../services/ProductService';
export default {
    //props: ['products'],
    data() {
        return {
            customers: customerService.getAllCustomers(),
            selectedCustomer: null,
        }
    },
    methods: {
        confirmPurchase() {
            const customer = customerService.getCustomerById(this.selectedCustomer)
            if (!customer) {
                alert("Must choose buyer");
                return;
            }
            if (this.products.quantity > 0){
                this.products.quantity-=1
                customer.cart.push(this.products)
            } else {
                alert(`No more ${this.products.title}`)
            }
        }
    },
    computed: {
    products() {
      const id = parseInt(this.$route.params.id);
      return productService.getProductById(id);
    },
    }
}
</script>

<style>

</style>