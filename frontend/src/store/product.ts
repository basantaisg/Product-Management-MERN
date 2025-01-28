import { create } from 'zustand';
import { ProductModel } from '../ProductModel/productModel';

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products: ProductModel[]) => set({ products }),
  createProduct: async (newProduct: ProductModel) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: 'Please fill in all fields.' };
    }
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: 'Product created successfully' };
  },
}));
