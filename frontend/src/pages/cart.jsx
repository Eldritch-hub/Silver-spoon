// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../context/cartContext";

function CartPage() {
  const { state, dispatch } = useCart();
  const total = state.items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="container my-5 pt-5">
      <h2 className="mb-4">Your Cart</h2>
      {state.items.length === 0 ? <p>Your cart is empty.</p> : (
        <>
          <div className="row">
            {state.items.map(item => (
              <div key={item._id} className="col-md-6 mb-3">
                <div className="card p-3">
                  <div className="d-flex align-items-center">
                    <img src={item.image} alt={item.name} style={{ width: 120, height: 80, objectFit: "cover", marginRight: 16 }} />
                    <div className="flex-grow-1">
                      <h5>{item.name}</h5>
                      <p>₦{item.price} • Qty: {item.qty}</p>
                      <div>
                        <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => dispatch({ type: "DECREASE", payload: item._id })}>-</button>
                        <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => dispatch({ type: "INCREASE", payload: item._id })}>+</button>
                        <button className="btn btn-sm btn-danger" onClick={() => dispatch({ type: "REMOVE", payload: item._id })}>Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <h4>Total: ₦{total}</h4>
            <button className="btn btn-warning">Checkout (coming soon)</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
