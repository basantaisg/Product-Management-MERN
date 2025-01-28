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
  fetchProducts: async () => {
    const res = await fetch('/api/products');
    const data = await res.json();
    set({ products: data.data });
  },
  deleteProduct: async (pid) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // updates the ui immediately (no refresh reqd)
    set((state) => ({
      products: state.products.filter(
        (product: ProductModel) => product._id !== pid
      ),
    }));
    return { success: true, message: data.message };
  },
  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({
      products: state.products.map((product: ProductModel) =>
        product._id === pid ? data.data : product
      ),
    }));

    return { success: true, message: data.message };
  },
}));
