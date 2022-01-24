import React, { useContext } from "react";
import { CartContext } from "./Cart";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <AiOutlineMinus
            size="2rem"
            cursor="pointer"
            color="red"
            onClick={() => decrement(id)}
          />

          <input type="text" placeholder={quantity} disabled />

          <AiOutlinePlus
            size="2rem"
            cursor="pointer"
            color="green"
            onClick={() => increment(id)}
          />
        </div>

        <div className="price">
          <h3>{price}₹</h3>
        </div>

        <div className="remove-item">
          <AiOutlineDelete
            size="3rem"
            cursor="pointer"
            color="red"
            onClick={() => removeItem(id)}
          />
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;
