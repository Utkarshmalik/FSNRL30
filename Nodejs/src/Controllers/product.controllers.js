
const Product = require("../Models/product.model");

const createProduct = (req,res)=>{
    if(!req.body){
        return res.status(400).send({message:"Product cannot be empty!"});
    }
    const id = Math.random().toString(36).substring(2,7);

    const newProduct = new Product({
        id:id,
        name:req.body.name,
        description:req.body.description,
        category:req.body.category,
        price:req.body.price
    });
    newProduct.save()
    .then(data=>{
        res.send(data);
    })
    .catch((err)=>{
        return res.status(500).send({message:err.message || "Internal Server Error" });
    })
}

const getAllProducts = (req,res)=>{

    Product.find({})
    .then(data=>{
        res.send(data)
    })
     .catch((err)=>{
        return res.status(500).send({message:err.message || "Internal Server Error" });
    })

}

const getProductById = (req,res)=>{

    const id = req.params.id;

    Product.findById(id)
     .then(data=>{
        if(!data){
            return res.status(400).send({message:"Invalid product Id"})
        }

        res.send(data)
    })
     .catch((err)=>{
        return res.status(500).send({message:err.message || "Internal Server Error" });
    })

}

const updateProduct = (req,res)=>{

    const productsData= req.body;

    Product.findByIdAndUpdate(req.params.id,productsData,{new:true})
    .then((data)=>{
        if(!data){
            return res.status(404).send({message:`Product not found with id:${req.params.id}`})
        }

        res.send(data);
    })
     .catch((err)=>{
        return res.status(500).send({message:err.message || "Internal Server Error" });
    })
}

const deleteProduct = (req,res)=>{

     Product.findByIdAndDelete(req.params.id)
     .then(data=>{
        if(!data){
            return res.status(404).send({message:`Product not found with id:${req.params.id}`})
        }

        return res.send({message:"Product deleted successfully"})
     })
      .catch((err)=>{
        return res.status(500).send({message:err.message || "Internal Server Error" });
    })
}

module.exports = {
    createProduct, getAllProducts, getProductById, updateProduct, deleteProduct
}
