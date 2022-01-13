import '../styles/styles.css'
import {FormEvent} from 'react';
import { useForm } from '../hooks/useForm';

export const Register = () => {
    const {name,email, password1, password2, onChange, resetForm, isValidEmail} = useForm({
        name:'',
        email:'',
        password1:'',
        password2:''
    });
   
    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Name"
                    name='name'
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length} && 'has-error'`}
                />
                {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                
                <input 
                    type="email"
                    name='email'
                    placeholder="Email" 
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) } && 'has-error'`}
                />
                {!isValidEmail(email) && <span>El email es obligatorio</span>}
                
                <input 
                    type="password"
                    name='password1' 
                    placeholder="Password"
                    value={password1}
                    onChange={onChange}
                    className={`${password1.trim().length} && 'has-error'`}
                />
                {password1.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                {password1.trim().length < 6 && password1.trim().length >0 && <span>El password debe ser de al menos 6 caracteres</span>}
                
                <input 
                    type="password"
                    name='password2' 
                    placeholder="Repeat password"
                    value={password2}
                    onChange={onChange}
                    className={`${password2.trim().length} && 'has-error'`}
                />
                {password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                {password1 === password2 && <span>Este campo es obligatorio</span>}

                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Clean Form</button>
            </form> 
        </div>
    )
}
