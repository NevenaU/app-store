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


class ProductService {
    getAllProducts() {
        return products;
    }
    getProductById(id) {
        return products.find(product => product.id === id)
    }
}

const productService = new ProductService();
export default productService;