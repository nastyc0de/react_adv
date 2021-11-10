import { ProductButtons } from "../components/ProductButtons"
import {ProductCard } from "../components/ProductCard"
import { ProductImage } from "../components/ProductImage"
import { ProductTitle } from "../components/ProductTitle"
import '../styles/custom-styles.css';


const product = {
    id: '1',
    title: 'Coffee Mug'
}
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
                <ProductCard product={product}>
                    <ProductImage 
                        className='custom-image'
                    />
                    <ProductTitle title='Hola Mundo' className='text-white'/>
                    <ProductButtons
                        className='custom-buttons'
                    />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle/>
                    <ProductButtons/>
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage