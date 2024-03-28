import React, { useRef } from "react";
import './ProductForm.css'
function ProductForm(props) {
    const idref = useRef()
    const productNameref = useRef()
    const productPriceref = useRef()
    const productCategoryRef = useRef()

    function addProduct(event){
        event.preventDefault()
        const enteredId = idref.current.value
        const enteredProductName = productNameref.current.value
        const enteredProductPrice = productPriceref.current.value
        const enteredProductCatagory = productCategoryRef.current.value
        const ProductData = {
            id: enteredId , 
            ProName : enteredProductName ,
            ProPrice : enteredProductPrice ,
            ProCatagory : enteredProductCatagory
        }
        console.log(ProductData)
        props.onaddproduct(ProductData)
        idref.current.value=''
        productNameref.current.value=''
        productCategoryRef.current.value=''
        productPriceref.current.value=''
    }
  return (
    <div className={'form-container'}>
    <form onSubmit={addProduct}>
      <label htmlFor="productId">Product ID</label>
      <input type="number" id="productId" name="productId" step="1" ref={idref}></input>
  
      <label htmlFor="productName">Product Name</label>
      <input type="text" id="productName" name="productName" ref={productNameref}></input>
  
      <label htmlFor="sellingPrice">Selling Price</label>
      <input type="number" id="sellingPrice" name="sellingPrice" ref={productPriceref}></input>
  
      <label htmlFor="productCategory">Product Category</label>
      <select id="productCategory" name="productCategory" ref={productCategoryRef}>
      <option value="">None</option>
        <option value="electronics">Electronics</option>
        <option value="foodItems">Food Items</option>
        <option value="skinCareProducts">Skin Care Products</option>
      </select>
  
      <button type="submit">Add Product</button>
    </form>
  </div> )
}

export default ProductForm;
