import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { userValidator as validator } from "../../validators/userValidator";
import { register } from "../../features/auth/actions";
import { useSelector } from 'react-redux';
import useForm from "../../hooks/useForm";
import { FormSubmitAuth, TextInputAuth } from "../";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth)

    const formFields = {
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }    

    const onSubmit = () => {
        dispatch(register(formData))
    }    

    const {formData, formErrors, handlerInputChange, handlerSubmit, showResponseMessage} = useForm({initialState: formFields, onSubmit, validator})
    
    return (
        <>
            <form onSubmit={handlerSubmit} >
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4 flex mt-6 flex-col border-sky-400 border-t-8">
                    <TextInputAuth 
                        handlerInputChange={handlerInputChange}
                        name='name'
                        isPassword={false}
                        error={formErrors.name}
                        placeholder='Nombres'
                        label='Nombres'
                    />
                    <TextInputAuth 
                        handlerInputChange={handlerInputChange}
                        name='surname'
                        isPassword={false}
                        error={formErrors.surname}
                        placeholder='Apellidos'
                        label='Apellidos'
                    />
                    <TextInputAuth 
                        handlerInputChange={handlerInputChange}
                        name='email'
                        isPassword={false}
                        error={formErrors.email}
                        placeholder='Email'
                        label='Email'
                    />
                    <TextInputAuth 
                        handlerInputChange={handlerInputChange}
                        name='password'
                        isPassword={true}
                        error={formErrors.password}
                        placeholder='**********'
                        label='Password'
                    />
                    <TextInputAuth 
                        handlerInputChange={handlerInputChange}
                        name='passwordConfirmation'
                        isPassword={true}
                        error={formErrors.passwordConfirmation}
                        placeholder='**********'
                        label='Repetir Password'
                    />
                    <FormSubmitAuth 
                        showResponseMessage={showResponseMessage}
                        error={error}
                        status={loading}
                        buttonText='Registrarse'
                    />
                </div>
            </form>
            <div className="text-center mb-5">
                <p className="text-grey-dark text-sm text-slate-500">¿Ya tenés una cuenta? <Link to='/auth/login' className="no-underline text-blue font-bold text-sky-400 hover:text-sky-500">Ingresar</Link>.</p>
            </div>
        </>
    )
}

export default RegisterForm
