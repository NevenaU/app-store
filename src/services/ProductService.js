const products = [
    {
        id: 1,
        title: "Krastavac",
        quantity: 3
    },
    {
        id: 2,
        title: "Paradajz",
        quantity: 5
    },
    {
        id: 3,
        title: "Kinder jaje",
        quantity: 2
    },
    {
        id: 4,
        title: "Koka kola",
        quantity: 10
    },
    {
        id: 5,
        title: "Hleb",
        quantity: 15
    }
]
let nextId = 6;

class ProductService {
    getAllProducts() {
        return products;
    }
    getProductById(id) {
        return products.find(product => product.id === id)
    }
    removeProduct(id) {
        const index = products.findIndex(product => product.id === id)
        products.splice(index, 1)
    }
    addProduct(product) {
        products.push({...product, id: nextId})
        nextId++;
    }
    sellProduct(id) {
        const product = this.getProductById(id)
        product.quantity--;
    }
}

const productService = new ProductService();
export default productService;