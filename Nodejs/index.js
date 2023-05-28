const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const products = require("./products");


app.use(bodyParser.json());


//middlewares 
app.use((req,res,next)=>{
    next();
})


app.get("/products",(req,res)=>{
    res.send(products)
})




app.get("/products/:id",(req,res)=>{

    const product = products.productsData.find((product)=>product.id===req.params.id);

    if(product===undefined){
        res.status(404);
        return res.send({error:`The product id passed ${req.params.id} is not available in our systems`});
    }

    return res.send(product);
})


app.post("/products",(req,res)=>{

    products.productsData.push(req.body);
    
    return res.status(201).send({messsage:"Product created successfully"})
    
})


app.delete("/products/:id",(req,res)=>{

     const product = products.productsData.find((product)=>product.id===req.params.id);

    if(product===undefined){
        res.status(404);
        return res.send({error:`The product id passed ${req.params.id} is not available in our systems`});
    }

    const newProductsData = products.productsData.filter((product)=>product.id!==req.params.id);
    products.productsData=newProductsData;

    res.status(200).send({message:`Product with id:${req.params.id} deleted successfully`});
})




const port = 3000;

app.listen(port, ()=>{
    console.log(`Your application is running on port ${port}`)
})
