import { Category } from "./Category";

interface Atribute {
    id: number;
    name: string;
    icon: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: Category;
    photo: string;
    stock: number;
    code: string;
    abstract: string;
    atributes: Atribute[];
}