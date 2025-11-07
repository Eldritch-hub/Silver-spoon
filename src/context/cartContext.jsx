// src/context/CartContext.jsx
import React, { createContext, useReducer, useContext, useEffect } from "react";

const CartContext = createContext();

const initialState = {
  items: [] // { id, name, price, qty, image }
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      {
        const found = state.items.find(i => i._id === action.payload._id);
        if (found) {
          return {
            ...state,
            items: state.items.map(i =>
              i._id === action.payload._id ? { ...i, qty: i.qty + 1 } : i
            )
          };
        }
        return { ...state, items: [...state.items, { ...action.payload, qty: 1 }] };
      }
    case "REMOVE":
      return { ...state, items: state.items.filter(i => i._id !== action.payload) };
    case "INCREASE":
      return { ...state, items: state.items.map(i => i._id === action.payload ? { ...i, qty: i.qty + 1 } : i) };
    case "DECREASE":
      return {
        ...state,
        items: state.items
          .map(i => i._id === action.payload ? { ...i, qty: Math.max(1, i.qty - 1) } : i)
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState, init => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : init;
    } catch {
      return init;
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
