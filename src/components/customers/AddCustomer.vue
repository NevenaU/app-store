<template>
  <form @submit.prevent="onSubmit">
		<div class="mb-3">
			<label for="firstName" class="form-label">First Name</label>
			<input required v-model="formData.firstName" type="text" class="form-control" id="firstName" />
		</div>
		<div class="mb-3">
			<label for="lastName" class="form-label">Last Name</label>
			<input required v-model="formData.lastName" type="text" class="form-control" id="lastName" />
		</div>
		<div class="mb-3">
			<label for="email" class="form-label">Email address</label>
			<input required v-model="formData.email" type="email" class="form-control" id="email" placeholder="name@example.com">
		</div>
		<button type="submit" class="btn btn-success">Create</button>
	</form>
</template>

<script>
export default {
name: "AddCustomer",
	data() {
		return {
			formData: {
				firstName: "",
				lastName: "",
				email: "",
			}
		}
	},
	methods: {
		onSubmit(){
			this.$emit('create-customer', this.formData)
			this.formData = {}
		}
	}
}
</script>

<style>

</style>