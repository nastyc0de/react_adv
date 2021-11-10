import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'

export const ProductTitle = ({title = ''}) => {
    const {product} = useContext(ProductContext);
    let productName: string;
    if(title){
        productName = title;
    }else if(product.title){
        productName = product.title
    }else{
        productName = ''
    }
    return(
        <span className={styles.productDescription}>{productName}</span>
    )
}