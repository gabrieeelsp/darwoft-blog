import { useDispatch } from "react-redux"
import { userValidator as validator } from "../../validators/userValidator";
import { forgotPassword } from "../../features/auth/authSlice";
import { useSelector } from 'react-redux';
import useForm from "../../hooks/useForm";
import TextInput from "../utils/form/auth/TextInput";
import FormSubmit from "../utils/form/auth/FormSubmit";

const ForgotPasswordForm = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.auth)

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
                    <TextInput 
                        handlerInputChange={handlerInputChange}
                        name='email'
                        isPassword={false}
                        error={formErrors.email}
                        placeholder='Email'
                        label='Email'
                    />
                    <FormSubmit 
                        showResponseMessage={showResponseMessage}
                        error={error}
                        status={status}
                    />

                </div>
            </form>
        </>
    )
}

export default ForgotPasswordForm
