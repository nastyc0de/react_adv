import '../styles/styles.css'
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const initialValues = {
    name:'',
    email:'',
    password1:'',
    password2:''
}
const validationSchema = Yup.object({
    name:Yup.string().min(2, 'debe de tener mas de 3 caracteres').max(15, 'debe de tener menos de 15 caracteres').required('Obligatorio'),
    email:Yup.string().email('Debe de poner una direccion de correo').required('Obligatorio'),
    password1:Yup.string().min(6,'Minimo 6 caracteres').required('Obligatorio'),
    password2:Yup.string().oneOf([Yup.ref('password1')], 'Las contrasenas deben de ser iguales').required('Obligatorio')
})
export const RegisterFormik = () => {
    
    return (
        <div>
            <h1>Register Formik</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) =>{
                    console.log(values)
                }}
                validationSchema={validationSchema}
            >
                {
                    formik => (
                        <Form>
                            <label htmlFor="name">Name</label>
                            <Field name='name' type='text'/>
                            <ErrorMessage name='name' component='span'/>
                            
                            <label htmlFor="email">Email</label>
                            <Field name='email' type='text'/>
                            <ErrorMessage name='email' component='span'/>

                            <label htmlFor="password1">Password</label>
                            <Field name='password1' type='password'/>
                            <ErrorMessage name='password1' component='span'/>

                            <label htmlFor="password2">Repeat Password</label>
                            <Field name='password2' type='password'/>
                            <ErrorMessage name='password2' component='span'/>
                            
                            <button type="submit">Create</button>
                            <button type="submit" onClick={formik.handleReset}>Clear</button>
                        </Form>
                    )
                }
            </Formik>
            
        </div>
    )
}
