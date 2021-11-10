import { ReactElement } from 'react';
export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[]
}
export interface Product {
    id:string;
    title:string;
    img?:string;
}
export interface ProductContextProps {
    counter:number;
    increaseBy:(num:number) => void;
    product: Product;
}