
const productsDiv = document.querySelector(".products");

function getProductsData(){

    fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data=>{
        const products = data.products;

        products.forEach(product => {
            const newProduct = createNewProduct(product);
            productsDiv.appendChild(newProduct);
        });
    })
}


function createNewProduct(productDetails){

    const product = document.createElement('div');
    product.setAttribute("class","product");

    const productImage = document.createElement('div');
    productImage.setAttribute("class","product-img")

    const img= document.createElement('img');
    img.setAttribute("src",productDetails.thumbnail);

    const productInfo = document.createElement('div');
    productInfo.setAttribute("class", "product-info");

    const title = document.createElement('h4');
    title.textContent = productDetails.title;
    title.setAttribute("class","title");


    const description = document.createElement('span');
    description.textContent = productDetails.description;
    description.setAttribute("class", "description");


    const brand = document.createElement('span');
    brand.textContent = productDetails.brand;
    brand.setAttribute("class", "brand");

    const price = document.createElement('span');
    price.textContent = productDetails.price;
    price.setAttribute("class", "price");

    const rating = document.createElement('span');
    rating.textContent = productDetails.rating;
    rating.setAttribute("class", "rating");


    productImage.appendChild(img);

    productInfo.appendChild(title);
    productInfo.appendChild(description);
    productInfo.appendChild(brand);
    productInfo.appendChild(price);
    productInfo.appendChild(rating);

    product.appendChild(productImage);
    product.appendChild(productInfo);

    return product;
}

getProductsData();