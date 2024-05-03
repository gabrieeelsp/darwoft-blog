import { useDispatch, useSelector } from "react-redux";
import { postValidator as validator } from "../../../validators/postValidator";
import { update } from "../../../features/posts/postsSlice";
import useForm from "../../../hooks/useForm";
import TextInput from "../../utils/form/profile/TextInput";
import SelectInput from "../../utils/form/profile/SelectInput";
import FormSubmit from "../../utils/form/profile/FormSubmit";
import EditorWYSWYG from "../../editor/EditorWYSWYG";

const PersonalDataForm = () => {
    const dispatch = useDispatch(); 
    const { post, status, error } = useSelector((state) => state.posts)
    const { categories } = useSelector((state) => state.app)

    const formFields = {
        title: post.title,
        categoryId: post.category,
        excerpt: post.excerpt || '',
        content: post.content || '',
    }

    const onSubmit = () => {
        console.log(formData)
        dispatch(update({...formData, id: post._id}))
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
                        showEmptyOption={false}
                    />
                    
                    <div className="grid grid-cols-12">
                        <label className="col-start-2 mt-1 col-span-2" htmlFor="">Extracto</label>
                        <div className='col-span-9'>
                            <EditorWYSWYG 
                                value={formData.excerpt}
                                handlerChange={handlerInputChange}
                                name='excerpt'
                                alto={24}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-12 mt-5">
                        <label className="col-start-2 mt-1 col-span-2" htmlFor="">Contenido</label>
                        <div className='col-span-9'>
                            <EditorWYSWYG 
                                value={formData.content}
                                handlerChange={handlerInputChange}
                                name='content'
                                alto={72}
                            />
                        </div>
                    </div>

                    <FormSubmit 
                        showResponseMessage={showResponseMessage}
                        error={error}
                        status={status}
                        succeededMessage='Su publicación se ha actualizado exitosamente'
                    />
                </div>
                
            </form>
        </>
    )
}

export default PersonalDataForm