import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductTable from "../../Component.js/table/Table";
import { ProductCart } from "../../Rdux/Cart/Reducer";
function Cart() {

  const dispatch = useDispatch();
  const myObject = useSelector((state) => state.cartR.cart);
  const productIds = Object.keys(myObject);
  const [products, setProducts] = useState([]); // Change product to products
  useEffect(() => {
    const fetchProducts = async () => {
        const produc = [];
        for (const id of productIds) {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                produc.push(response.data);
        setProducts(produc);

            } catch (error) {
                console.error(`Error fetching product with ID ${id}:`, error);
            }
        }
    };

    fetchProducts();
}, []);

  console.log(products)

  return (
    <>
      <ProductTable data={products} />
      {/* Pass the array of products to the ProductTable component */}
    </>
  );
}

export default Cart;
