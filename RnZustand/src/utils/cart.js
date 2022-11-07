import create from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const cartQuantity = cart => {
  let quantity = 0;
  cart.forEach(item => {
    quantity += item.quantity;
  });
  return quantity;
};

export const cartTotal = cart => {
  let Suma = 0;
  cart.forEach(item => {
    Suma += item.price * item.quantity;
  });
  return Suma;
};

export const useCart = create(
  persist(
    set => ({
      cart: [],
      addItem: item => {
        set(state => {
          const cart = [...state.cart];
          let include = false;
          cart.forEach(product => {
            if (product.id === item.id) {
              product.quantity += 1;
              include = true;
            }
          });
          if (!include) {
            cart.push(item);
          }
          return {cart};
        });
      },
      removeItem: id => {
        set(state => {
          const cart = state.cart.filter(item => {
            if (item.id !== id) {
              return item;
            }
          });
          return {cart};
        });
      },
      removeQuantity: id => {
        set(state => {
          const cart = [...state.cart];
          cart.forEach(item => {
            if (item.id === id) {
              const newQuantity = item.quantity - 1;
              if (newQuantity >= 1) {
                item.quantity = newQuantity;
              }
              return {cart};
            }
          });
          return {cart};
        });
      },
      clearCart: () => set(() => ({cart: []})),
    }),
    {
      name: 'cart',
      getStorage: () => AsyncStorage,
    },
  ),
);
