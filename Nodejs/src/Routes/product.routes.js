
const { createProduct, getAllProducts, getProductById, deleteProduct, updateProduct } = require("../Controllers/product.controllers");

module.exports = (app)=>{
    app.post("/products", createProduct);
    app.get("/products", getAllProducts)
    app.get("/products/:id", getProductById)
    app.put("/products/:id", updateProduct)
    app.delete("/products/:id",deleteProduct)
}
