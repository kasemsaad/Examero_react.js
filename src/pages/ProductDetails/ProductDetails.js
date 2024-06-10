import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyButton from "../../Component.js/Button/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, addToCart } from "../../Rdux/Cart/Actions";
import { addToFavorites, removeFromFavorites } from "../../Rdux/wishliste/Action";

function ProductDetails() {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState({}); 
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const prod = useSelector((state) => state.cartR.cart);
  const dispatch = useDispatch();

  const addCart = (productId) => {
    const payload = {
      productId: productId,
      quantity: 1,
    };
    dispatch(addToCart(payload));
  };

  const myFav = useSelector((state) => state.favR.fav);
  const [productInFavorites, setProductInFavorites] = useState(myFav.includes(id));

  const onClick = (id) => {
    if (!productInFavorites) {
      dispatch(addToFavorites(id));
    }
    setProductInFavorites(!productInFavorites);
  };

  return (
    <div className="container">
      <div className="row ">
        {product && Object.keys(product).length > 0 && ( // Check if product is available and not empty
          <>
            <div className="min-vh-100 w-100 ">
              <div
                className=" row w-100 h-sm-50  mt-lg-2"
                style={{ height: "300px", width: "300px" }}
              >
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="mt-lg-1 col-3 mt-1 p-2"
                    style={{ height: "100%" }}
                  >
                    <img
                      className=""
                      style={{ height: "100%", width: "100%" }}
                      src={image}
                      alt={`Product Image ${index}`}
                    />
                  </div>
                ))}
              </div>
              <div
                style={{ height: "50%" }}
                className="d-flex flex-column align-content-center justify-content-center "
              >
                <ul
                  className="list-group text-dark "
                  style={{ listStyle: "none" }}
                >
                  <li>Brand: {product.brand}</li>
                  <li> Name: {product.title}</li>
                  <li>Price: ${product.price}</li>
                  <li>Rating {product.rating}</li>
                </ul>
                <h3 className="text-dark">{product.description}</h3>
                <span className="text-primary">
                  Quantity={prod[product.id]}
                </span>
                <div className="">
                  <MyButton
                    onClick={() => addCart(product.id)}
                    content="Add to cart"
                    color="primary"
                  />
                  {productInFavorites ? (
  <span className="text-center" style={{fontSize:'3rem',color:'red'}}>&hearts;</span>
) : (
<MyButton
                    onClick={() => onClick(product.id)}
                    content="Add to wishlist"
                    color="danger"
                  />)}
                  
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
