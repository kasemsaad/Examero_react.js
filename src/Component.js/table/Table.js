import React, { useState } from "react";
import MyButton from "../Button/MyButton";
import { useDispatch, useSelector } from "react-redux";
import {
  RemoveOneProduct,
  addToCart,
  removeFromCart,
} from "../../Rdux/Cart/Actions";
import { ProductCart } from "../../Rdux/Cart/Reducer";
function ProductTable({ data }) {
  const cartState = useSelector((state) => state.cartR);
  const myObject = cartState.cart;
  const dispatch = useDispatch();

  const addProduct = (productId) => {
    console.log(myObject[productId]);
    // let newValue = myObject[productId] + 1; // Increment the existing value
    const payload = {
      productId: productId,
      quantity: 1, // You can set the initial quantity to 1 or any other value as needed
    };

    dispatch(addToCart(payload)); // Dispatch the action to update the value
  };
  const RemoveProduct = (productId) => {
    const payload = {
      productId: productId,
      //  quantity:-1// You can set the initial quantity to 1 or any other value as needed
    };

    dispatch(removeFromCart(payload));
  };
  const RemoveOne = (productId) => {
    const payload = {
      productId: productId,
      quantity: -1, // Decrement quantity by 1
    };

    dispatch(RemoveOneProduct(payload)); // Dispatch the action to remove one unit of the product
  };

  var x = 0; // const [buttonText, setButtonText] = useState(MovieInFavorites ? "Remove" : "Add");
  var y = 0;

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>image</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>
              <img
                style={{ width: "70px" }}
                src={item.images[0]}
                alt="Product"
              />
            </td>

            <td>{item.brand}</td>
            <td>${item.price}</td>
            <td>{item.rating}</td>
            <td>{myObject[item.id]}</td>
            <td>${myObject[item.id] * item.price}</td>
            <td>
              <MyButton
                color="primary"
                back="primary"
                onClick={() => addProduct(item.id)}
                content="+"
              />
              <MyButton content="|" />
              <MyButton
                color="danger"
                back="primary"
                onClick={() => RemoveProduct(item.id)}
                content="-"
              />
              {/* <MyButton color="danger" back="primary" onClick={()=>removeFromCart(item.id)} content="-"/> */}

              {/* <MyButton color="danger" back="primary" onClick={()=>RemoveOne(item.id)} content="ٌRemove"/> */}

              {/* <button className="btn text-bg-danger">+</button> */}
              {(y += myObject[item.id])}
              {(x += myObject[item.id] * item.price)}
            </td>
          </tr>
        ))}
        <tr>
          <td>
            {" "}
            total Quantity=
            {y}
          </td>
          <td> total cost= ${x}</td>
          <td>taxes= ${x * 0.1}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ProductTable;
