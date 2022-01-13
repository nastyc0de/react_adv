import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

const initialValues ={
    firstname:'',
    lastname:'',
    email:'',
    terms:false,
    jobs:'',
}
const validationSchema = Yup.object({
    firstname:Yup.string().max(15, 'debe de tener menos de 15 caracteres').required('Obligatorio'),
    lastname:Yup.string().max(15, 'debe de tener menos de 15 caracteres').required('Obligatorio'),
    email:Yup.string().email('Debe de poner una direccion de correo').required('Obligatorio'),
    terms:Yup.boolean().oneOf([true],'Debes de aceptar las condiciones'),
    jobs:Yup.string().notOneOf(["developer_jr"], 'Esta opcion no es requerida').required('Obligatorio')
})

export const FormikComponents = () => {
    
    return (
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
                        <label htmlFor="firstname">First Name</label>
                        <Field name='firstname' type='text'/>
                        <ErrorMessage name='firstname' component='span'/>

                        <label htmlFor="lastname">Last Name</label>
                        <Field name='lastname' type='text'/>
                        <ErrorMessage name='lastname' component='span'/>

                        <label htmlFor="email">Email</label>
                        <Field name='email' type='text'/>
                        <ErrorMessage name='email' component='span'/>

                        <label htmlFor="jobs">Job Type</label>
                        <Field name='jobs' as='select'>
                            <option value="">Pick something?</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="sysadmin">Sysadmin</option>
                            <option value="qa_engineer">QA Engineer</option>
                            <option value="developer_jr">Developer Jr.</option>

                        </Field>
                        <ErrorMessage name='jobs' component='span'/>
                        
                        <label>
                            <Field name='terms' type='checkbox'/>
                            Terms & conditions
                        </label>
                        <ErrorMessage name='terms' component='span'/>



                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
        </Formik>
        // <div>
        //     <h1>Formik Components</h1>
        //     <form noValidate onSubmit={formik.handleSubmit}>
        //         <label htmlFor="firstname">First Name</label>
        //         <input 
        //             type="text"
        //             {...formik.getFieldProps('firstname')}
        //         />
        //         {formik.touched.firstname && formik.errors.firstname &&<span>{formik.errors.firstname}</span>}

        //         <label htmlFor="lastname">Last Name</label>
        //         <input 
        //             type="text"
        //             {...formik.getFieldProps('lastname')}

        //         />
        //         {formik.touched.firstname && formik.errors.lastname &&<span>{formik.errors.lastname}</span>}

        //         <label htmlFor="email">Email</label>
        //         <input 
        //             type="text" 
        //             {...formik.getFieldProps('email')}
        //         />
        //         {formik.touched.email && formik.errors.email &&<span>{formik.errors.email}</span>}
        //         <button type='submit'>Submit</button>
        //     </form>
        // </div>
    )
}
