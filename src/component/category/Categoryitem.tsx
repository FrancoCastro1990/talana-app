import React, { useContext } from 'react'
import { Category } from '../../models/Category'
import { ProductsContext } from '../context/ProductsContext'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './category-item.scss'

type CategoryItemProps = {
    category: Category,
    isActive: boolean,
    setActive: (id: number) => void
}

export const Categoryitem = ({ category, isActive, setActive }: CategoryItemProps) => {

    const setCategory = useContext(ProductsContext).showfilterProducts;

    const renderContent = () => {
        if (isActive) {
            return <>
                {category.name}
                <ArrowForwardIosIcon

                />
            </>
        } else {
            return <>{category.name}</>
        }
    }

    return (
        <div
            className={`category-item ${isActive ? 'item-active' : ''}`}
            onClick={() => {
                setCategory(category.id);
                setActive(category.id);
            }}
            key={category.id}>
            {renderContent()}
        </div>
    )
}
