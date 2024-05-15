import { useDispatch, useSelector } from "react-redux";
import { categoryValidator as validator } from "../../../../validators/categoryValidator";
import { create } from "../../../../features/categories/actions";
import useForm from "../../../../hooks/useForm";

import { useNavigate } from 'react-router-dom'
import { FormSubmit, TextInput } from "../../../";
import { addCategory } from "../../../../features/app/appSlice";

const NewCategoryForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch(); 
    const { loading, error } = useSelector((state) => state.posts)

    const formFields = {
        name: '',
        description: '',
    }

    const onSubmit = () => {
        dispatch(create({...formData})).unwrap()
            .then((resp) => {
                dispatch(addCategory(resp.data))
                setTimeout(() => {
                    navigate(`/perfil/categorias`, { replace: true})
                }, 1000)
            } )
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
                        placeholder='Nombre'
                        label='Nombre'
                        value={formData.name}
                    />
                    <TextInput 
                        handlerInputChange={handlerInputChange}
                        name='description'
                        isPassword={false}
                        error={formErrors.description}
                        placeholder='Desscripción'
                        label='Desscripción'
                        value={formData.description}
                    />
                    
                    <FormSubmit 
                        showResponseMessage={showResponseMessage}
                        error={error}
                        status={loading}
                        succeededMessage='Se ha creado exitosamente'
                    />
                </div>
                
            </form>
        </>
    )
}

export default NewCategoryForm