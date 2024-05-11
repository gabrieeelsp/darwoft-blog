import { useDispatch } from "react-redux"
import { userValidator as validator } from "../../validators/userValidator";
import { changePassword } from "../../features/auth/actions";
import { useSelector } from 'react-redux';
import useForm from "../../hooks/useForm";
import { FormSubmitAuth, TextInputAuth } from "../";
import { useNavigate } from "react-router-dom";

const ChangePasswordForm = (props) => {
    const navigate = useNavigate();
    const { token } = props
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth)

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
                        buttonText='Cambiar contraseña'
                    />
                </div>
            </form>
        </>
    )
}

export default ChangePasswordForm
