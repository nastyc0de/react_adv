import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputText, Checkbox, Select } from '../components';
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

export const FormikAbstract = () => {
    
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
                        <InputText label={'Firstname'} name={'firstname'}/>
                        <InputText label={'Lastname'} name={'lastname'}/>
                        <InputText label={'Email'} name={'email'} type='email'/>
                        
                        <Select label='jobs' name='jobs'>
                            <option value="">Pick something?</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="sysadmin">Sysadmin</option>
                            <option value="qa_engineer">QA Engineer</option>
                            <option value="developer_jr">Developer Jr.</option>
                        </Select>
                        <Checkbox label='Terms and Conditions' name='terms'/>

                        <button type='submit'>Submit</button>
                    </Form>
                )
            }
        </Formik>
    )
}
