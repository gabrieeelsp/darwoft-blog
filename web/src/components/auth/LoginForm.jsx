import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { userValidator as validator } from "../../validators/userValidator";
import { login } from "../../features/auth/authSlice";
import { useSelector } from 'react-redux';
import useForm from "../../hooks/useForm";
import TextInput from "../utils/form/auth/TextInput";
import FormSubmit from "../utils/form/auth/FormSubmit";
import CheckInput from "../utils/form/auth/CheckInput";

const LoginForm = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.auth)

    const formFields = {
        email: '',
        password: '',
        rememberMe: false,
    }    

    const onSubmit = () => {
        dispatch(login(formData))
    }

    const {formData, formErrors, handlerInputChange, handlerSubmit, showResponseMessage} = useForm({initialState: formFields, onSubmit, validator})
    
    return (
        <>
            <form onSubmit={handlerSubmit} >
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4 flex flex-col border-sky-400 border-t-8">
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
                    <FormSubmit 
                        showResponseMessage={showResponseMessage}
                        error={error}
                        status={status}
                    />

                    <div className="flex items-center justify-between mb-4">
                        <CheckInput 
                            handlerInputChange={handlerInputChange}
                            name='rememberMe'
                            label='Recordarme'
                        />

                        
                        <Link to="#" className="inline-block align-baseline text-sky-400 font-bold text-sm text-blue hover:text-sky-500" >
                            Olvidaste la contraseña?
                        </Link>
                    </div>
                </div>
            </form>
            <div className="text-center">
                <p className="text-grey-dark text-sm text-slate-500">¿No tienes una cuenta? <Link to='/auth/register' className="no-underline text-blue font-bold text-sky-400 hover:text-purple-500">Crear una cuenta</Link>.</p>
            </div>
        </>
    )
}

export default LoginForm
