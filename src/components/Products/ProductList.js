import React from "react";

function ProductList(props){
   const AllProducts = props.showproducts
   const electronicProducts = []
   const FoodItems = []
   const Skincare = []
   AllProducts.forEach(product => {

    if (product.ProCatagory==='electronics'){
        electronicProducts.push(product)
    }
    else if (product.ProCatagory==='foodItems'){
FoodItems.push(product)

    }
    else if (product.ProCatagory==='skinCareProducts'){
        Skincare.push(product)
    }
    
   });

   const deleteProduct = (id) => {
    console.log('Deleting product with ID:', id);
    props.ondelete(id);
  }

    

return (<div>
    <div><h3>Electronics Products</h3>
    <ul>
        {electronicProducts.map((product)=>(
            <li key={product.id}>
            {product.ProName} - ${product.ProPrice} - {product.ProCatagory}
            <button type="button" onClick={() => deleteProduct(product.id)}>DELETE PRODUCT</button>
          </li>
        ))}
    </ul>
    </div>
    <div><h3>Food Items</h3>
    <ul>
        {FoodItems.map((product)=>(
            <li key={product.id}>
            {product.ProName} - ${product.ProPrice} - {product.ProCatagory} <button type="button">DELETE PRODUCT</button>
          </li>
        ))}
    </ul>
    </div>
    <div><h3>Skin Care Products</h3>
    <ul>
        {Skincare.map((product)=>(
            <li key={product.id}>
            {product.ProName} - ${product.ProPrice} - {product.ProCatagory} <button type="button">DELETE PRODUCT</button>
          </li>
        ))}
    </ul>
    </div>

</div>)

}
export default ProductList;