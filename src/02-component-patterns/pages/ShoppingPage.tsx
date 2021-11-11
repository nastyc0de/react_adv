import { ProductButtons } from "../components/ProductButtons"
import {ProductCard } from "../components/ProductCard"
import { ProductImage } from "../components/ProductImage"
import { ProductTitle } from "../components/ProductTitle"
import '../styles/custom-styles.css';
import { products } from "../data/products";
import useShoppingCart from "../hooks/useShoppingCart";




const ShoppingPage = () => {
    const {shoppingCart, onProductCountChange} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div  style={{
                display:"flex",
                flexDirection:'row',
                flexWrap:'wrap'
            }}>
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id} 
                            product={product}
                            className='bg-dark'
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage />
                            <ProductTitle/>
                            <ProductButtons/>
                        </ProductCard>

                    ))
                }
            </div>
            {/* {
                <input
                    value={counter}
                    onChange={(e) => setCounter(e.target.value)}
                />
            } */}
            <div className="shopping-cart">
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
            
            </div>  
        </div>
    )
}

export default ShoppingPage