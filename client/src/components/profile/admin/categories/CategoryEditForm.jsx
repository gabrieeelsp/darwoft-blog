import { useDispatch, useSelector } from "react-redux";
import { categoryValidator as validator } from "../../../../validators/categoryValidator";

import useForm from "../../../../hooks/useForm";
import { CheckInput, FormSubmit, TextInput } from "../../../";
import { update } from "../../../../features/categories/actions";
import { updateCategory } from "../../../../features/app/appSlice";

const CategoryEditForm = () => {
    const dispatch = useDispatch(); 

    const { category, loading, error } = useSelector((state) => state.categories)

    const formFields = {
        name: category.name,
        description: category.description,
        isVisible: category.isVisible,
    }

    const onSubmit = () => {
        dispatch(update({...formData, id: category._id})).unwrap()
            .then(() => dispatch(updateCategory({...formData, id: category._id})))
            .catch(() => {})       
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
                        placeholder='Descripción'
                        label='Descripción'
                        value={formData.description}
                    />

                    <CheckInput
                            handlerInputChange={handlerInputChange}
                            name='isVisible'
                            label='Publicar'
                            value={formData.isVisible}
                        />

                    

                    <FormSubmit 
                        showResponseMessage={showResponseMessage}
                        error={error}
                        status={loading}
                        succeededMessage='Se ha actualizado exitosamente'
                    />
                </div>
                
            </form>
        </>
    )
}

export default CategoryEditForm