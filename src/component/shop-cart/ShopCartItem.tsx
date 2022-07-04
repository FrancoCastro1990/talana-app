import React, { useContext } from 'react'
import { PurshareDetail } from '../../models/PurshareDetail';
import { getMoneyFormat } from '../../utils/getMoneyFormat';
import { ShopCartContext } from '../context/ShopCartContext';
import { Counter } from '../counter/Counter';
import './shop-cart-item.scss'

type ShopCartItemProps = {
    purchareItem: PurshareDetail
}

export const ShopCartItem = ({
    purchareItem
}: ShopCartItemProps) => {
    const { updateQuantity } = useContext(ShopCartContext);
    return (
        <div
            className='shop-cart-item'
        >
            <p
                className='shop-cart-item-name'
            >{purchareItem.product.name}</p>

            <Counter
                value={purchareItem.quantity}
                isDisabledDecrement={purchareItem.quantity === 0}
                isDisabledIncrement={purchareItem.quantity === purchareItem.product.stock}
                onDecrement={() => {
                    updateQuantity(purchareItem.product, purchareItem.quantity - 1)
                }}
                onIncrement={() => {
                    updateQuantity(purchareItem.product, purchareItem.quantity + 1)
                }}
            />

            <p

            >Sub-Total: <span className='shop-cart-item-price'>{getMoneyFormat(purchareItem.total)}</span></p>
        </div>
    )
}
