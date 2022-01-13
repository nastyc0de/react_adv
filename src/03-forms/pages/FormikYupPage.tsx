import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

const initialValues ={
    firstname:'',
    lastname:'',
    email:'',
}
export const FormikYupPage = () => {
    
    const formik = useFormik({
        initialValues:initialValues,
        onSubmit: (values) => {
            console.table(values);
        },
        validationSchema: Yup.object({
            firstname:Yup.string().max(15, 'debe de tener menos de 15 caracteres').required('Obligatorio'),
            lastname:Yup.string().max(15, 'debe de tener menos de 15 caracteres').required('Obligatorio'),
            email:Yup.string().email('Debe de poner una direccion de correo').required('Obligatorio'),
        })
    })
    return (
        <div>
            <h1>Formik Yup Page</h1>
            <form noValidate onSubmit={formik.handleSubmit}>
                <label htmlFor="firstname">First Name</label>
                <input 
                    type="text"
                    {...formik.getFieldProps('firstname')}
                />
                {formik.touched.firstname && formik.errors.firstname &&<span>{formik.errors.firstname}</span>}

                <label htmlFor="lastname">Last Name</label>
                <input 
                    type="text"
                    {...formik.getFieldProps('lastname')}

                />
                {formik.touched.firstname && formik.errors.lastname &&<span>{formik.errors.lastname}</span>}

                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email &&<span>{formik.errors.email}</span>}
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
