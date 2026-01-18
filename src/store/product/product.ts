import { create } from 'zustand';
import { combine } from 'zustand/middleware';

const useCountStore = create(
  combine({ product: {} }, (set, get) => ({
    addProduct: item =>
      set(state => ({
        product: { ...state.product, ...item },
      })),
    getProducts: () => {
      return get().product;
    },
  }))
);

export default useCountStore;
