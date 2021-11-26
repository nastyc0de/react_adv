import { ProductButtons } from "../components/ProductButtons"
import {ProductCard } from "../components/ProductCard"
import { ProductImage } from "../components/ProductImage"
import { ProductTitle } from "../components/ProductTitle"
import '../styles/custom-styles.css';
import { products} from '../data/products';


const product = products[0]
const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div  style={{
                display:"flex",
                flexDirection:'row',
                flexWrap:'wrap'
            }}>
        
                <ProductCard
                    key={product.id} 
                    product={product}
                    className='bg-dark'
                >
                    <ProductImage />
                    <ProductTitle/>
                    <ProductButtons/>
                </ProductCard>

            </div>
        </div>
    )
}

export default ShoppingPage