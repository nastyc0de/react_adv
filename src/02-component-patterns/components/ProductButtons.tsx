import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct';

interface Props {
    className?: string;
}
export const ProductButtons = ({className}:Props) => {
    const {counter, increaseBy, maxCount} = useContext(ProductContext);
    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount],
    )
    return(
        <div className={`${styles.buttonsContainer} ${className}`}>
                <button 
                    className={styles.buttonAdd}
                    onClick={() => increaseBy(-1)}
                > - </button>
                
                <div className={styles.countLabel}>{counter}</div>
                
                <button 
                    className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
                    onClick={() => increaseBy(1)}
                > + </button>
            </div>
    )
}