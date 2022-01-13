import { Form, Formik } from 'formik';
import { InputText } from '../components';
import formData from '../data/custom-form.json';

const initialValues: {[key: string]: any} = {};
for (const input of formData) {
    initialValues[input.name] = input.value
}
export const DinamicFormPage = () => {
    return (
        <div>
            <h1>DynamicForm</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) =>(
                    console.log(values)
                )}
            >
                {
                    (formik) => (
                        <Form>
                            {formData.map(({type, name, placeholder, label}) => {
                                return(
                                    <InputText
                                        key={name}
                                        type={(type as any)} 
                                        label={label} 
                                        name={name}
                                        placeholder={placeholder}                                    />
                                )
                            })}
                            <hr />
                            <button type='submit'>Submit</button>
                        </Form>
                )}
            </Formik>
        </div>
    )
}
