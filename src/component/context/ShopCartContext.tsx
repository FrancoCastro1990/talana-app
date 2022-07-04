import React from "react";
import { Product } from "../../models/Product";
import { PurshareDetail } from "../../models/PurshareDetail";

interface ShopCartContextProps {
    purchaseList: PurshareDetail[];
    addtoCart: (product: Product, quantity: number) => void;
    updateQuantity: (product: Product, quantity: number) => void;
    total: number;
}

export const ShopCartContext = React.createContext<ShopCartContextProps>({
    purchaseList: [],
    addtoCart: (_product: Product, _quantity: number) => null,
    updateQuantity: (_product: Product, _quantity: number) => null,
    total: 0
})