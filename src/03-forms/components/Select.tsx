import { ErrorMessage, useField } from "formik";

interface Props {
    label:string;
    name:string;
    placeholder?:string;
    [x:string]:any
}
export const Select = ({label, ...props}:Props) => {
    const [field, meta] = useField(props);

    return (
        <>
          <label htmlFor={props.id || props.name}>{label}</label>
          <input  {...field} {...meta}/>
          
          <ErrorMessage name={props.name} component='span'/>   
        </>
    )
}

