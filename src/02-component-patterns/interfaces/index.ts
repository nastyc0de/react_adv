import { CSSProperties, ReactElement } from 'react';

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?:string;
    style?:CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
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
export interface OnChangeArgs {
    product: Product,
    count: number;
}
export interface ProductInCart extends Product{
    count: number
}