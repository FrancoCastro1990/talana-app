import React, { useState } from 'react'
import { Product } from '../../models/Product'
import { getMoneyFormat } from '../../utils/getMoneyFormat'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ProductInfoDialog } from './ProductInfoDialog';
import { IconButton } from '@mui/material';
import "./product-item.scss";
import { Counter } from '../counter/Counter';

type ProductItemProps = {
    product: Product
}

export const ProductItem = ({ product }: ProductItemProps) => {

    const [count, setCount] = useState(0);
    const [openDialog, setOpenDialog] = useState(false);

    const handleClosedDialog = () => {
        setOpenDialog(false);
    }

    const handleAddQuantity = () => {
        if (count + 1 <= product.stock) {
            setCount(count + 1);
        }
    }

    const handleRemoveQuantity = () => {
        if (count - 1 >= 0) {
            setCount(count - 1);
        }
    }

    return (
        <div
            className='product-item'

        >
            <div
               className='product-item-image-and-stock'
            >
                <img src={product.photo} alt=""

                />
                {product.stock > 0 ? <p
                    className='product-item-have-stock'
                   >Disponible</p> : <p
                   className='product-item-no-stock'
                >Sin stock</p>}
            </div>

            <p
               className='product-item-name'
            >{product.name}</p>
            <p
                className='product-item-price'
            >Precio: {getMoneyFormat(product.price)}</p>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Counter
                    value={count}
                    isDisabledDecrement={count === 0}
                    isDisabledIncrement={count === product.stock}
                    onDecrement={handleRemoveQuantity}
                    onIncrement={handleAddQuantity}
                />
                <IconButton
                    onClick={() => {
                        setOpenDialog(true);
                    }} >
                    <ShoppingCartIcon

                        color='primary' />
                </IconButton>

            </div>
            <ProductInfoDialog
                open={openDialog}
                product={product}
                onClose={handleClosedDialog}
                count={count}
                onAddQuantity={handleAddQuantity}
                onRemoveQuantity={handleRemoveQuantity}
            />
        </div>
    )
}
