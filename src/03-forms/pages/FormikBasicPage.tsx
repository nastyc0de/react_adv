import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValues {
    firstname:string
    lastname:string
    email:string
}
const initialValues ={
    firstname:'',
    lastname:'',
    email:'',
}
export const FormikBasicPage = () => {
    
    const validate = ({email, firstname, lastname}:FormValues) => {
        const errors:FormikErrors<FormValues> = {};
        if(!firstname){
            errors.firstname = 'Required'
        } else if (firstname.length > 15) {
            errors.firstname = 'The firstname must have at least 15 characters'
        }
        if(!lastname){
            errors.lastname = 'Required'
        } else if (lastname.length > 15) {
            errors.lastname = 'The lastname must have at least 15 characters'
        }

        return errors
    }
    const formik = useFormik({
        initialValues:initialValues,
        onSubmit: (values) => {
            console.table(values);
        },
        validate
    })
    return (
        <div>
            <h1>Formik Basic Page</h1>
            <form noValidate onSubmit={formik.handleSubmit}>
                <label htmlFor="firstname">First Name</label>
                <input 
                    type="text" 
                    name='firstname'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.firstname} 
                />
                {formik.touched.firstname && formik.errors.firstname &&<span>{formik.errors.firstname}</span>}

                <label htmlFor="lastname">Last Name</label>
                <input 
                    type="text" 
                    name='lastname'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.lastname} 
                />
                {formik.touched.firstname && formik.errors.lastname &&<span>{formik.errors.lastname}</span>}

                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email} 
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
