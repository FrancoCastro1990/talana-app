import React from 'react'
import { Product } from '../models/Product';
import { useProductServices } from './useProductServices';

export const useProducts = () => {

  const { getAllProducts } = useProductServices();
  const [initialProducts, setInitialProducts] = React.useState<Product[]>([]);
  const [filterProducts, setFilterProducts] = React.useState<Product[]>([]);

  const getAllProductsAsync = async () => {
    try {
      const response = await getAllProducts();
      if (response) {
        setInitialProducts(response);
        setFilterProducts(response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const setfilterProducts = (category: number) => {
    const filteredProducts = initialProducts.filter(product => product.category.id === category);
    setFilterProducts(filteredProducts);
  }

  const setAllProducts = () => {
    setFilterProducts(initialProducts);
  }

  const findProductByWord = (word: string) => {
    const filteredProducts = initialProducts.filter(product => product.name.toLowerCase().includes(word.toLowerCase()) || product.description.toLowerCase().includes(word.toLowerCase()) || product.category.name.toLowerCase().includes(word.toLowerCase()));
    setFilterProducts(filteredProducts);
  }

  return { products: filterProducts, filterProducts, setfilterProducts, getAllProductsAsync, setAllProducts, findProductByWord } as const;
}
