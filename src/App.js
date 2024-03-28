import React, { useState } from 'react';
import ProductForm from './components/Input/ProductForm';
import ProductList from './components/Products/ProductList';

function App() {
  const [productList, setProductList] = useState([])

  function addProduct(product){

    setProductList((previousProducts)=>{
      return [...previousProducts , product ]
    })

  }
  function deleteProduct(id) {
    console.log(id)
    setProductList(previousProducts => {
      return previousProducts.filter(product => product.id !== id);
    });
  }

  return (
    <div>
    <ProductForm onaddproduct={addProduct}/>
    <ProductList showproducts={productList} ondelete={deleteProduct}/>
    </div>
  );
}

export default App;
