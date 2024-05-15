import { useDispatch, useSelector } from "react-redux";
import { postValidator as validator } from "../../validators/postValidator";
import { update } from "../../features/posts/actions";
import useForm from "../../hooks/useForm";
import { CheckInput, FormSubmit, SelectInput, TextInput } from "../";
import EditorWYSWYG from "../form/profile/editor/EditorWYSWYG";
import { updatePost } from "../../features/posts/postsSlice";

const EditPostForm = () => {
    const dispatch = useDispatch(); 
    const { post, loading, error } = useSelector((state) => state.posts)
    const { categories } = useSelector((state) => state.app)

    const formFields = {
        title: post.title,
        isVisible: post.isVisible,
        categoryId: post.category._id,
        excerpt: post.excerpt || '',
        content: post.content || '',
    }

    const onSubmit = () => {
        dispatch(update({...formData, id: post._id})).unwrap()
            .then(() => dispatch(updatePost({...formData, id: post._id})))
    }

    const {formData, formErrors, handlerInputChange, handlerSubmit, showResponseMessage} = useForm({initialState: formFields, onSubmit, validator})


    return (
        <>
            <form onSubmit={handlerSubmit} >
                <div className="py-3 px-4 sm:pl-10">
                    <TextInput 
                        handlerInputChange={handlerInputChange}
                        name='title'
                        isPassword={false}
                        error={formErrors.title}
                        placeholder='Título'
                        label='Título'
                        value={formData.title}
                    />
                    <CheckInput
                            handlerInputChange={handlerInputChange}
                            name='isVisible'
                            label='Publicar'
                            value={formData.isVisible}
                        />

                    <SelectInput 
                        handlerInputChange={handlerInputChange}
                        name='categoryId'
                        error={formErrors.categoryId}
                        label='Categoría'
                        value={formData.categoryId}
                        options={Object.values(categories)}
                        // options={Object.keys(categories).map((c) => (categories[c]))}
                        showEmptyOption={false}
                    />
                    
                    <div className="grid grid-cols-12">
                        <label className="mt-1 col-span-8 sm:col-span-2" htmlFor="">Extracto</label>
                        <div className='col-span-12 sm:col-span-10'>
                            <EditorWYSWYG 
                                value={formData.excerpt}
                                handlerChange={handlerInputChange}
                                name='excerpt'
                                alto={24}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-12 mt-5">
                        <label className="mt-1 col-span-8 sm:col-span-2" htmlFor="">Contenido</label>
                        <div className='col-span-12 sm:col-span-10'>
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
                        status={loading}
                        succeededMessage='Su publicación se ha actualizado exitosamente'
                    />
                </div>
                
            </form>
        </>
    )
}

export default EditPostForm