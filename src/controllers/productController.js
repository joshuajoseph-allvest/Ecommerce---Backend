const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2499,
        category: "Electronics",
        stock: 20,
        description: "Bluetooth wireless headphones with noise cancellation"
    },
    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 3499,
        category: "Electronics",
        stock: 15,
        description: "RGB mechanical keyboard with blue switches"
    },
    {
        id: 3,
        name: "Gaming Mouse",
        price: 999,
        category: "Electronics",
        stock: 30,
        description: "Ergonomic gaming mouse with adjustable DPI"
    },
    {
        id: 4,
        name: "Cotton T-Shirt",
        price: 799,
        category: "Fashion",
        stock: 50,
        description: "Comfortable 100% cotton casual T-shirt"
    },
    {
        id: 5,
        name: "Running Shoes",
        price: 2999,
        category: "Footwear",
        stock: 25,
        description: "Lightweight running shoes for everyday training"
    },
    {
        id: 6,
        name: "Smart Watch",
        price: 4999,
        category: "Electronics",
        stock: 12,
        description: "Smart watch with fitness and health tracking features"
    },
    {
        id: 7,
        name: "Travel Backpack",
        price: 1599,
        category: "Accessories",
        stock: 18,
        description: "Water-resistant backpack with laptop compartment"
    },
    {
        id: 8,
        name: "Ceramic Coffee Mug",
        price: 399,
        category: "Home",
        stock: 40,
        description: "Minimalist ceramic coffee mug"
    },
    {
        id: 9,
        name: "USB-C Charger",
        price: 1299,
        category: "Electronics",
        stock: 35,
        description: "65W fast charger with USB-C compatibility"
    },
    {
        id: 10,
        name: "Desk Lamp",
        price: 899,
        category: "Home",
        stock: 22,
        description: "Adjustable LED desk lamp"
    }
];


const getAllProducts = (req,res) => {
    res.status(200).json({
        success: true,
        count: products.length,
        data: products
      }
    )
}

const getProductById = (req,res) => {
    const productId = Number(req.params.id);

    for (const product of products){
        if (product.id === productId){
            return res.status(200).json({
                success:true,
                data: product
            });
        }

    }
    res.status(404).json({
        success:false,
        message:"Product not found"
    })
}

export {getAllProducts, getProductById};









