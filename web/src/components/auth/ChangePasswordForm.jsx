import { useDispatch } from "react-redux"
import { userValidator as validator } from "../../validators/userValidator";
import { changePassword } from "../../features/auth/authSlice";
import { useSelector } from 'react-redux';
import useForm from "../../hooks/useForm";
import TextInput from "../utils/form/auth/TextInput";
import FormSubmit from "../utils/form/auth/FormSubmit";
import { useNavigate } from "react-router-dom";

const ChangePasswordForm = (props) => {
    const navigate = useNavigate();
    const { token } = props
    const dispatch = useDispatch();
    const { status, error } = useSelector((state) => state.auth)

    const formFields = {
        password: '',
        passwordConfirmation: ''
    }    

    const onSubmit = () => {
        dispatch(changePassword({...formData, token})).unwrap()
        .then(() => {
            setTimeout(() => {
                navigate('/auth/login', { replace: true})
            }, 3000)
        })
    }
    

    const {formData, formErrors, handlerInputChange, handlerSubmit, showResponseMessage} = useForm({initialState: formFields, onSubmit, validator})
    
    return (
        <>
            <form onSubmit={handlerSubmit} >
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4 flex flex-col border-sky-400 border-t-8">
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
        </>
    )
}

export default ChangePasswordForm
