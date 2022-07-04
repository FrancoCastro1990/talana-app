import { Product } from '../models/Product';
import { useAxiosServices } from './useAxiosServices';

export const useProductServices = () => {
    const servicesUrl = 'http://sva.talana.com:8000/api/product/';

    const {callAxios} = useAxiosServices();

    const getAllProducts = async () => {
        try {
            return await callAxios('get',servicesUrl) as Product[];
        } catch (error) {
            console.log(error);
        }
    }

    const getProduct = async (id: number) => {
        try {
            return await callAxios('get',`${servicesUrl}${id}`);
        } catch (error) {
            console.log(error);
        }
    }
    return { getAllProducts,getProduct } as const;
}



