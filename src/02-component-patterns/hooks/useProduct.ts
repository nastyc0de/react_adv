import { useEffect, useRef, useState } from 'react';
import { OnChangeArgs, Product, InitialValues } from '../interfaces/index';

interface UseProductArgs {
    product: Product;
    onChange?: (args:OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}
const useProduct = ({onChange, product, value=0, initialValues}:UseProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    const increaseBy = (value:number) => {
        let newValue = Math.max(counter + value,0 )
        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)
        }
        setCounter(newValue);
        onChange && onChange({count:newValue, product})
    }
    const reset = () => {
        setCounter(initialValues?.count || value)
    }
    const maxCount = initialValues?.maxCount
    return {
        counter, 
        increaseBy, 
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount,
        reset
    }
}

export default useProduct
