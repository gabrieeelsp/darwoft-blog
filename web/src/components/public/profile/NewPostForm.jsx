import { useDispatch, useSelector } from "react-redux";
import { postValidator as validator } from "../../../validators/postValidator";
import { create } from "../../../features/posts/postsSlice";
import useForm from "../../../hooks/useForm";
import TextInput from "../../utils/form/profile/TextInput";
import SelectInput from "../../utils/form/profile/SelectInput";
import FormSubmit from "../../utils/form/profile/FormSubmit";
import { useNavigate } from 'react-router-dom'

const PersonalDataForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch(); 
    const { status, error } = useSelector((state) => state.posts)
    const { categories } = useSelector((state) => state.app)

    const formFields = {
        title: '',
        categoryId: '',
    }

    const onSubmit = () => {
        dispatch(create({...formData})).unwrap()
            .then((resp) => navigate(`/perfil/publicaciones/${resp.data.post._id}/editar`, { replace: true}) )
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
                        options={categories}
                    />
                    
                    <FormSubmit 
                        showResponseMessage={showResponseMessage}
                        error={error}
                        status={status}
                        succeededMessage='Su publicación se ha creado exitosamente'
                    />
                </div>
                
            </form>
        </>
    )
}

export default PersonalDataForm