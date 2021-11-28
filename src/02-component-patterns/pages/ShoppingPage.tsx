import { ProductButtons } from "../components/ProductButtons"
import {ProductCard } from "../components/ProductCard"
import { ProductImage } from "../components/ProductImage"
import { ProductTitle } from "../components/ProductTitle"
import '../styles/custom-styles.css';
import { product } from '../data/products';
// import useShoppingCart from "../hooks/useShoppingCart";



const ShoppingPage = () => {
    // const {shoppingCart, onProductCountChange} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <ProductCard
                key={product.id} 
                product={product}
                className='bg-dark'
                initialValues={{
                    count: 5,
                    maxCount: 10
                }}                   
            >
                {
                    ({reset, count, isMaxCountReached, maxCount, increaseBy}) => (
                        <>
                            <ProductImage />
                            <ProductTitle/>
                            <ProductButtons/>
                            <button onClick={reset}>reset</button>
                            <button onClick={() => increaseBy(-2)}> -2 </button>
                            {
                                (!isMaxCountReached && <button onClick={() => increaseBy(+2)}> +2 </button>)
                            }
                            
                            <span>{count} - {maxCount}</span>
                        </>
                    )
                }
            </ProductCard>
            {/* {
                <input
                    value={counter}
                    onChange={(e) => setCounter(e.target.value)}
                />
            } */}
            {/* <div className="shopping-cart">
                {
                    Object.entries(shoppingCart).map(([key, product]) =>(
                        <ProductCard
                            key={key}
                            product={product}
                            style={{width:'100px'}}
                            onChange={onProductCountChange}
                            value={product.count}
                        >
                            <ProductImage />
                            <ProductButtons/>
                        </ProductCard>
                    ))
                }
            
            </div>   */}
        </div>
    )
}

export default ShoppingPage