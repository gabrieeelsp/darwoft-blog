import { useDispatch } from "react-redux"
import { userValidator as validator } from "../../validators/userValidator";
import { forgotPassword } from "../../features/auth/actions";
import { useSelector } from 'react-redux';
import useForm from "../../hooks/useForm";
import { FormSubmitAuth, TextInputAuth } from "../";

const ForgotPasswordForm = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth)

    const formFields = {
        email: '',
    }    

    const onSubmit = () => {
        dispatch(forgotPassword(formData))
    }

    const {formData, formErrors, handlerInputChange, handlerSubmit, showResponseMessage} = useForm({initialState: formFields, onSubmit, validator})
    
    return (
        <>
        
            <form onSubmit={handlerSubmit} >
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4 flex flex-col border-sky-400 border-t-8">
                    <h2 className="text-center font-bold mb-3">Cambio de contraseña</h2>
                    <TextInputAuth 
                        handlerInputChange={handlerInputChange}
                        name='email'
                        isPassword={false}
                        error={formErrors.email}
                        placeholder='Email'
                        label='Email'
                    />
                    <FormSubmitAuth 
                        showResponseMessage={showResponseMessage}
                        error={error}
                        status={loading}
                        buttonText='Enviar'
                    />

                </div>
            </form>
        </>
    )
}

export default ForgotPasswordForm
