import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material'
import React, { useContext } from 'react'
import { Product } from '../../models/Product';
import { getMoneyFormat } from '../../utils/getMoneyFormat';
import CloseIcon from '@mui/icons-material/Close';
import { ShopCartContext } from '../context/ShopCartContext';
import { Counter } from '../counter/Counter';
import './product-info-dialog.scss'

type ProductInfoDialogProps = {
    product: Product,
    open: boolean,
    onClose: () => void,
    count: number,
    onAddQuantity: () => void,
    onRemoveQuantity: () => void,
}

export const ProductInfoDialog = ({
    product,
    open,
    onClose,
    count, onAddQuantity, onRemoveQuantity
}: ProductInfoDialogProps) => {

    const addtoCart = useContext(ShopCartContext).addtoCart;

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>Agregar Producto?</DialogTitle>

            <IconButton
                aria-label="close"
                style={{ position: 'absolute', top: 0, right: 0 }}
                onClick={onClose}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <div
                    className='product-info-dialog-content'
                >
                    <img
                        src={product.photo}
                        alt=""
                    />
                    <div>
                        <p style={{
                            marginBottom: 8
                        }}>{product.name}</p>
                        <p style={{
                            marginBottom: 8,

                        }}>codigo: <span style={{
                            fontWeight: 'bold',
                            color: '#00bcd4'
                        }}> {product.code}</span></p>
                        <div
                            className='product-info-dialog-content-quantity'
                        ><span>cantidad:</span>
                            <Counter
                                value={count}
                                isDisabledDecrement={count === 0}
                                isDisabledIncrement={count === product.stock}
                                onDecrement={onRemoveQuantity}
                                onIncrement={onAddQuantity}
                            />
                        </div>
                        <p style={{
                            marginBottom: 8
                        }}>sub-total: <span
                            style={{
                                color: 'rgb(34, 34, 191)',
                                fontWeight: 'bold'
                            }}
                        >{getMoneyFormat(count * product.price)}</span></p>
                    </div>
                </div>
                <div
                    className='product-info-dialog-description'
                >
                    {product.description}
                </div>
            </DialogContent>
            <DialogActions
                style={{
                    margin: 8
                }}
            >
                <Button onClick={onClose} >Cancelar</Button>
                <Button onClick={() => {
                    addtoCart(product, count);
                    onClose();
                }}
                    variant="contained"
                >Agregar</Button>
            </DialogActions>
        </Dialog>
    )
}
