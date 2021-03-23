const customers = [
  {
    id: 1,
    firstName: "Ivo",
    lastName: "Andric",
    email: "ivo@gmail.com",
    cart: [],
  },
  {
    id: 2,
    firstName: "Tomas",
    lastName: "Mann",
    email: "tomas@gmail.com",
    cart: [],
  },
  {
    id: 3,
    firstName: "Mesa",
    lastName: "Selimovic",
    email: "mesa@gmail.com",
    cart: [],
  },
  {
    id: 4,
    firstName: "Momo",
    lastName: "Kapor",
    email: "momo@gmail.com",
    cart: [],
  },
  {
    id: 5,
    firstName: "Oskar",
    lastName: "Vajld",
    email: "oskar@gmail.com",
    cart: [],
  },
];
let nextId = 6;
class CustomerService {
  getAllCustomers() {
    return customers;
  }
  removeCustomer(id) {
    const index = customers.findIndex((customer) => customer.id === id);
    customers.splice(index, 1);
  }
  addNewCustomer(newCustomer) {
    customers.push({ ...newCustomer, id: nextId });
    nextId += 1;
  }
  getCustomerById(id) {
    return customers.find((customer) => customer.id === id);
  }
}

const customerService = new CustomerService();
export default customerService;
