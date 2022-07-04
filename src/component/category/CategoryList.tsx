import React, { useContext, useEffect, useState } from 'react'
import { useCategoryServices } from '../../hooks/useCategoryServices'
import { ProductsContext } from '../context/ProductsContext';
import { Categoryitem } from './Categoryitem';
import './category-list.scss';

export const CategoryList = () => {

    const { getAllCategorys } = useCategoryServices();
    const [categories, setCategories] = useState<any[] | undefined>([]);
    const showAllProducts = useContext(ProductsContext).showAllProducts;

    const [categoryActive, setCategoryActive] = useState<number>(0);

    const getAllCategorysAsync = async () => {
        try {
            const response = await getAllCategorys();
            setCategories(response);
        } catch (error) {
            console.log(error);
        }
    }

    const renderCategories = () => {
        if (categories) {
            return categories.map((category: any) => {
                return <li key={`category_item_${category.id}`}><Categoryitem category={category} isActive={category.id === categoryActive} setActive={setCategoryActive} /></li>
            }).concat(
            <li
            key={`category_item_${0}`}
                onClick={() => {
                    showAllProducts()
                }}
            >
                <Categoryitem category={{ id: 0, name: 'Todas las Categorias', order: 0 }} isActive={categoryActive === 0} setActive={setCategoryActive} />
            </li>)
        }
    }

    useEffect(
        () => {
            getAllCategorysAsync();
            // eslint-disable-next-line
        }, []);

    return (
        <div
           className='category-list'
        >
            <p>Categorias</p>
            <ul>
                {renderCategories()}
            </ul>
        </div>
    )
}
