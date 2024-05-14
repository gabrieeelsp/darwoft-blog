import { useDispatch, useSelector } from "react-redux";
import { userValidator as validator } from "../../validators/userValidator";
import { update } from "../../features/user/actions";
import useForm from "../../hooks/useForm";
import { updateUser } from "../../features/auth/authSlice";
import { FormSubmit, SelectInput, TextInput } from "../";

const PersonalDataForm = () => {
    const dispatch = useDispatch(); 
    const { user, loading, error } = useSelector((state) => state.users)
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
                <div className="py-3 px-4 sm:pl-10">
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
                        status={loading}
                        succeededMessage='Su perfil se ha actualizado exitosamente'
                    />
                
                </div>
                
            </form>
        </>
    )
}

export default PersonalDataForm