import { useDispatch, useSelector } from "react-redux";
import { userValidator as validator } from "../../../validators/userValidator";
import { update } from "../../../features/user/usersSlice";
import useForm from "../../../hooks/useForm";
import TextInput from "../../utils/form/profile/TextInput";
import SelectInput from "../../utils/form/profile/SelectInput";
import FormSubmit from "../../utils/form/profile/FormSubmit";
import { updateUser } from "../../../features/auth/authSlice";

const PersonalDataForm = () => {
    const dispatch = useDispatch(); 
    const { user, status, error } = useSelector((state) => state.users)
    const { genders } = useSelector((state) => state.app)

    const formFields = {
        name: user.name, 
        surname: user.surname, 
        gender: user.gender
    }
    
    const onSubmit = () => {
        dispatch(update({...formData, id: user._id})).unwrap()
            .then((payload) => dispatch(updateUser(payload)))
    }

    const {formData, formErrors, handlerInputChange, handlerSubmit, showResponseMessage} = useForm({initialState: formFields, onSubmit, validator})

    return (
        <>
            <form onSubmit={handlerSubmit} >
                <div className="p-3">
                    <TextInput 
                        handlerInputChange={handlerInputChange}
                        name='name'
                        isPassword={false}
                        error={formErrors.name}
                        placeholder='Nombres'
                        label='Nombres'
                        value={formData.name}
                    />

                    <TextInput 
                        handlerInputChange={handlerInputChange}
                        name='surname'
                        isPassword={false}
                        error={formErrors.surname}
                        placeholder='Apellidos'
                        label='Apellidos'
                        value={formData.surname}
                    />

                    <SelectInput 
                        handlerInputChange={handlerInputChange}
                        name='gender'
                        error={formErrors.gender}
                        label='Género'
                        value={formData.gender}
                        options={genders}
                    />
                    <FormSubmit 
                        showResponseMessage={showResponseMessage}
                        error={error}
                        status={status}
                        succeededMessage='Su perfil se ha actualizado exitosamente'
                    />
                
                </div>
                
            </form>
        </>
    )
}

export default PersonalDataForm