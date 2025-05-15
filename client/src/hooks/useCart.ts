import type { Product } from "@/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (product: Product) => void;
  increaseQuantity: (productId: string, size: string) => void;
  decreaseQuantity: (productId: string, size: string) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) => {
        set((state) => {
          const isItemInCart = state.items.find(
            (cartItem) => cartItem.product._id === product._id
          );

          if (isItemInCart) {
            const updatedCart = state.items.map((item) =>
              item.product._id === product._id
                ? { ...item, quantity: (item.quantity as number) + 1 }
                : item
            );

            return {
              items: updatedCart,
              total: updatedCart.reduce(
                (total, item) =>
                  total + item.product.gia_san_pham * item.quantity,
                0
              ),
            };
          }

          return {
            items: [...state.items, { product, quantity: 1 }],
          };
        });
      },
      removeItem: (id) =>
        set((state) => {
          return {
            items: state.items.filter((item) => item.product._id !== id),
          };
        }),
      decreaseQuantity(productId, size) {},
      increaseQuantity(productId, size) {},
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
