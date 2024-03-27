import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Pick up");

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }
  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <p>Shipping: {shipping}</p>
      <label>
        <input
          type="radio"
          value="Pickup"
          checked={shipping === "Pickup"}
          onChange={handleShippingChange}
        />
        Pickup
      </label>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <br />
      <br />
      <input onChange={handleNameChange} value={name} />
      <p>Name: {name}</p>

      <input type="number" onChange={handleQuantityChange} value={quantity} />
      <p>Quantity: {quantity}</p>

      <textarea
        placeholder="Enter delivery instructions"
        onChange={handleCommentChange}
        value={comment}
      />
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select and option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>
    </div>
  );
}

export default MyComponent;
