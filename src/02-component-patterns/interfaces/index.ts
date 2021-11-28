import { CSSProperties, ReactElement } from 'react';

export interface Props {
    product: Product;
    children: (args: ProductCardHandlers) => JSX.Element
    // children?: ReactElement | ReactElement[];
    className?:string;
    style?:CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
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
    maxCount?: number;
}
export interface OnChangeArgs {
    product: Product,
    count: number;
}
export interface ProductInCart extends Product{
    count: number
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;
}