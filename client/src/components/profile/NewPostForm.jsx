import { useDispatch, useSelector } from "react-redux";
import { postValidator as validator } from "../../validators/postValidator";
import { create } from "../../features/posts/actions";
import useForm from "../../hooks/useForm";

import { useNavigate } from 'react-router-dom'
import { FormSubmit, SelectInput, TextInput } from "../";

const PersonalDataForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch(); 
    const { loading, error } = useSelector((state) => state.posts)
    const { categories } = useSelector((state) => state.app)

    const formFields = {
        title: '',
        categoryId: '',
    }

    const onSubmit = () => {
        dispatch(create({...formData})).unwrap()
            .then((resp) => {
                setTimeout(() => {
                    navigate(`/perfil/publicaciones/${resp.data._id}/editar`, { replace: true})
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
                        name='title'
                        isPassword={false}
                        error={formErrors.title}
                        placeholder='Título'
                        label='Título'
                        value={formData.title}
                    />

                    <SelectInput 
                        handlerInputChange={handlerInputChange}
                        name='categoryId'
                        error={formErrors.categoryId}
                        label='Categoría'
                        value={formData.categoryId}
                        options={Object.keys(categories).map((c) => (categories[c]))}
                    />
                    
                    <FormSubmit 
                        showResponseMessage={showResponseMessage}
                        error={error}
                        status={loading}
                        succeededMessage='Su publicación se ha creado exitosamente'
                    />
                </div>
                
            </form>
        </>
    )
}

export default PersonalDataForm