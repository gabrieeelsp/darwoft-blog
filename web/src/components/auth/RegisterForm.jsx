import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { userValidator as validator } from "../../validators/userValidator";
import { register } from "../../features/auth/authSlice";
import { useSelector } from 'react-redux';
import useForm from "../../hooks/useForm";
import TextInput from "../utils/form/auth/TextInput";
import FormSubmit from "../utils/form/auth/FormSubmit";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.auth)

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
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4 flex flex-col border-purple-400 border-t-8">
                    <TextInput 
                        handlerInputChange={handlerInputChange}
                        name='name'
                        isPassword={false}
                        error={formErrors.name}
                        placeholder='Nombres'
                        label='Nombres'
                    />
                    <TextInput 
                        handlerInputChange={handlerInputChange}
                        name='surname'
                        isPassword={false}
                        error={formErrors.surname}
                        placeholder='Apellidos'
                        label='Apellidos'
                    />
                    <TextInput 
                        handlerInputChange={handlerInputChange}
                        name='email'
                        isPassword={false}
                        error={formErrors.email}
                        placeholder='Email'
                        label='Email'
                    />
                    <TextInput 
                        handlerInputChange={handlerInputChange}
                        name='password'
                        isPassword={true}
                        error={formErrors.password}
                        placeholder='**********'
                        label='Password'
                    />
                    <TextInput 
                        handlerInputChange={handlerInputChange}
                        name='passwordConfirmation'
                        isPassword={true}
                        error={formErrors.passwordConfirmation}
                        placeholder='**********'
                        label='Repetir Password'
                    />
                    <FormSubmit 
                        showResponseMessage={showResponseMessage}
                        error={error}
                        status={status}
                    />
                </div>
            </form>
            <div className="text-center">
                <p className="text-grey-dark text-sm text-slate-500">¿Ya tienes una cuenta? <Link to='/auth/login' className="no-underline text-blue font-bold text-purple-400 hover:text-purple-500">Ingresar</Link>.</p>
            </div>
        </>
    )
}

export default RegisterForm
