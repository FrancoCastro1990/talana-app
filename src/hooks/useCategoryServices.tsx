import { Category } from '../models/Category';
import { useAxiosServices } from './useAxiosServices';

export const useCategoryServices = () => {

    const servicesUrl = 'http://sva.talana.com:8000/api/product-category/';

    const {callAxios} = useAxiosServices();

    const getAllCategorys = async () => {
        try {
            return await callAxios('get',servicesUrl) as Category[];
        } catch (error) {
            console.log(error);
        }
    }

    return { getAllCategorys } as const;

}
