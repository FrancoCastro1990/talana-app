import React, { useContext } from 'react'
import { getMoneyFormat } from '../../utils/getMoneyFormat';
import { ShopCartContext } from '../context/ShopCartContext';
import { ShopCartItem } from './ShopCartItem';
import './shop-cart-popover.scss'


type ShopCartPopoverProps = {
    isOpen: boolean;
}

export const ShopCartPopover = ({ isOpen }: ShopCartPopoverProps) => {

    const { purchaseList, total } = useContext(ShopCartContext);



    const renderPurchaseList = () => {
        return purchaseList.map((item, index) => {
            return (
                <ShopCartItem
                    purchareItem={item}
                    key={`shot_cart_${index}`}
                />
            )
        })
    }

    return (
        <div
            className='shop-cart-popover'
            style={{
                display: isOpen ? 'flex' : 'none',
            }}

        >
            <h3>Resumen de compra</h3>
            {renderPurchaseList()}
            <p
                className='shop-cart-popover-total'
            >Total: <span>{getMoneyFormat(total)}</span></p>

        </div>
    )
}
