import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductTable from "../../Component.js/table/Table";
import { ProductCart } from "../../Rdux/Cart/Reducer";
import NCarde from "../../Component.js/Carde/newCard";
import MyButton from "../../Component.js/Button/MyButton";
import { removeFromFavorites } from "../../Rdux/wishliste/Action";
function Wish() {
  const dispatch = useDispatch();
  const productIds = useSelector((state) => state.favR.fav);
  const lenth = productIds.length;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const prod = [];
      for (const id of productIds) {
        try {
          const response = await axios.get(
            `https://dummyjson.com/products/${id}`
          );
          prod.push(response.data);
        } catch (error) {
          console.error(`Error fetching movie with ID ${id}:`, error);
        }
      }
      setProducts(prod);
    };

    fetchProduct();
  }, [productIds]);
  const onClickToRemove = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <>
      {lenth === 0 ? (
        <h1 style={{ margin: "10px auto", textAlign: "center" }} className="">
          Their is no products{" "}
        </h1>
      ) : (
        <div className="container-fluid">
          <div className="row">
            {products.map((product, index) => (
              <div key={index} className="col-sm-11 col-md-3">
                <NCarde
                  name={product.title}
                  desc={product.description}
                  img={product.images[0]}
                  price={product.price}
                  id={product.id}
                  rating={product.rating}
                  total={product.stock}
                />
                <MyButton
                  onClick={() => onClickToRemove(product.id)}
                  content="Remove"
                  color="danger"
                  size="100%"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Wish;
