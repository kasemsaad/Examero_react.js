import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
} from "react-icons/fa";
import "./card.css";
import MyButton from "../Button/MyButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function NCarde(props) {
  const myFav = useSelector((state) => state.favR.fav);
  const [productInFavorites, setProductInFavorites] = useState(
    myFav.includes(props.id)
  );
  const myObject = useSelector((state) => state.cartR.cart);

  const productInCart = Object.values(myObject).includes(props.id);

  console.log();
  // console.log(productInCart);
  return (
    <>
      <div className=" productList text-dark  mt-3  text-center">
        <div key={props.id} className="card productCard  c ">
          <img
            src={props.img}
            alt="product-img"
            className="productImage w-100"
          ></img>
          {productInCart && (
            <FaShoppingCart
              style={{
                color: "red",
                backgroundColor: productInCart ? "red" : "gray",
              }}
              className={"productCard_cart "}
            />
          )}
          {/* <FaShoppingCart style={{}} className={"productCard_cart "} /> */}
          {productInFavorites && (
            <FaRegBookmark
              style={{ color: "red", backgroundColor: "red" }}
              className="productCard_wishlist text-red"
            />
          )}

          <FaRegBookmark className={"productCard_wishlist "} />
          <FaFireAlt className={"productCard_fastSelling"} />
          <p className=" badge bg-warning cat">{props.category}</p>

          <div className="productCard_content">
            <p className="">{props.name.slice(0, 20)}</p>
            <Link
              to={`/product/${props.id}`}
              style={{ textDecoration: "none" }}
              className="link-opacity-50-hover"
            >
              {props.desc.slice(0, 100)}...
            </Link>
            <div className="displayStack__1">
              <div className="productPrice">${props.price}</div>
            </div>

            <div className="displayStack__2">
              <div className="productRating d-flex text-center justify-content-center align-content-center">
                {Array.from({ length: props.rating }, (_, i) => i + 1).map(
                  (page) => (
                    <FaStar className="star" />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NCarde;
