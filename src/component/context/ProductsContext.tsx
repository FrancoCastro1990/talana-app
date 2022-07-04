import React from "react";
import { Product } from "../../models/Product";

interface ProductContextProps {
    products?: Product[];
    showAllProducts: () => void;
    showfilterProducts: (categoryId: number) => void;
    findProductByWord: (word: string) => void;
}

export const ProductsContext = React.createContext<ProductContextProps>({
    products: [],
    showAllProducts: () => null,
    showfilterProducts: (_category: number) => null,
    findProductByWord: (_word: string) => null
})