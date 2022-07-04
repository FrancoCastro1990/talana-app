import React from 'react'
import { Product } from '../models/Product';
import { PurshareDetail } from '../models/PurshareDetail';

export const useShopCart = () => {

    const [purchaseList, setPurchaseList] = React.useState<PurshareDetail[]>([]);
    const [total, setTotal] = React.useState<number>(0);

    const addtoCart = (product: Product, quantity: number) => {
        const newPurchaseList = [...purchaseList, { product, quantity, total: product.price * quantity }];
        setPurchaseList(newPurchaseList);
        setTotal(calculateTotal(newPurchaseList));
    }

    const updateQuantity = (product: Product, quantity: number) => {
        const newPurchaseList = purchaseList.map(item => {
            if (item.product.id === product.id) {
                item.quantity = quantity;
                item.total = product.price * quantity;
            }
            return item;
        }
        );
        setPurchaseList(newPurchaseList);
        setTotal(calculateTotal(newPurchaseList));
    }

    const calculateTotal = (purshareDetail: PurshareDetail[]) => {
        let currentTotal = 0;
        purshareDetail.forEach(item => {
            currentTotal += item.total;
        });
        return currentTotal;
    }

    return { purchaseList, total, addtoCart, updateQuantity } as const;
}
