
const { createProduct, getAllProducts, getProductById, deleteProduct, updateProduct } = require("../Controllers/product.controllers");
const { verifyJWT, verifyAdmin } = require("../Middlewares/auth.middlewares");

module.exports = (app)=>{
    app.post("/products",[verifyJWT, verifyAdmin], createProduct);
    app.get("/products", [verifyJWT] , getAllProducts)
    app.get("/products/:id",[verifyJWT], getProductById)
    app.put("/products/:id",[verifyJWT, verifyAdmin], updateProduct)
    app.delete("/products/:id",[verifyJWT,verifyAdmin],deleteProduct)
}
