
import useProduct from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, Props } from '../interfaces';
import styles from '../styles/styles.module.css'


export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({children, product, className, style, onChange, value}:Props) => {
    
    const {counter, increaseBy} = useProduct({onChange, product, value});
    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
                <div className={`${styles.productCard} ${className}`
            
            }
            style={style}
            >
                {children}
                {/* <ProductImage img={img}/>
                <ProductTitle title={title}/>
                <ProductButtons 
                    count={counter}
                    increase={increaseBy}
                />  */}
            </div>
        </Provider>
        
    )
}