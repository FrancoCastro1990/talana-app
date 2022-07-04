import React from 'react'
import { Product } from '../../models/Product'
import { ProductItem } from './ProductItem'
import './product-list.scss'

type ProductListProps = {
    products?: Product[]
}

export const ProductList = ({ products }: ProductListProps) => {

    const renderProducts = () => {
        if (products && products.length > 0) {
            return products.map(product => {
                return (
                    <div key={product.id}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',

                        }}
                    >
                        <ProductItem product={product} />

                    </div>
                )
            })
        }
        return <div>No hay productos</div>
    }

    return (
        <div
            className='product-list'
        >
            <h2
                className='product-list-title'
            >Productos Disponibles</h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                    gridGap: '120px',
                }}>
                {renderProducts()}
            </div>

        </div>
    )
}
