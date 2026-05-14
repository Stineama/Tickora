import { useState, useEffect, useCallback } from "react";

const CART_STORAGE_KEY = "tickora-cart";

// Helper to get cart from localStorage
const getCartFromStorage = () => {
  const stored = localStorage.getItem(CART_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Shared state for cart synchronization across components
let cartListeners = [];
let currentCart = getCartFromStorage();

const notifyListeners = () => {
  cartListeners.forEach(listener => listener(currentCart));
};

export function useCart() {
  const [cartItems, setCartItems] = useState(getCartFromStorage);

  useEffect(() => {
    const updateCart = (newCart) => {
      setCartItems(newCart);
    };

    cartListeners.push(updateCart);
    return () => {
      cartListeners = cartListeners.filter(listener => listener !== updateCart);
    };
  }, []);

  const addToCart = useCallback((item) => {
    const updatedCart = currentCart.map(c => ({...c})); // clone
    const existingItem = updatedCart.find(
      (cartItem) =>
        cartItem.eventId === item.eventId &&
        cartItem.ticketType === item.ticketType
    );

    if (existingItem) {
      for (let i = 0; i < updatedCart.length; i++) {
        if (updatedCart[i].eventId === item.eventId && 
            updatedCart[i].ticketType === item.ticketType) {
          updatedCart[i] = {
            ...updatedCart[i],
            quantity: updatedCart[i].quantity + item.quantity
          };
          break;
        }
      }
    } else {
      updatedCart.push(item);
    }

    currentCart = updatedCart;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(currentCart));
    notifyListeners();
  }, []);

  const removeFromCart = useCallback((id) => {
    const updatedCart = currentCart.filter(item => item.id !== id);
    currentCart = updatedCart;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(currentCart));
    notifyListeners();
  }, []);

  const updateQuantity = useCallback((id, newQuantity) => {
    if (newQuantity < 1) {
      const updatedCart = currentCart.filter(item => item.id !== id);
      currentCart = updatedCart;
    } else {
      const updatedCart = currentCart.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      currentCart = updatedCart;
    }
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(currentCart));
    notifyListeners();
  }, []);

  const clearCart = useCallback(() => {
    currentCart = [];
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(currentCart));
    notifyListeners();
  }, []);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return {
    cartItems,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };
}