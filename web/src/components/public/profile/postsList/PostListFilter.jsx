import { useSelector } from "react-redux";
import useFilter from "../../../../hooks/useFilter";
import TextInput from "../../../utils/form/filter/TextInput";
import SelectInput from "../../../utils/form/filter/SelectInput";
import FormSubmit from "../../../utils/form/filter/FormSubmit";


const PostListFilter = () => {
    const formFields = {
        title: '',
        category: '',
    }

    const { formData, handlerInputChange, handlerSubmit } = useFilter(formFields)

    const { categories } = useSelector((state) => state.app)

    return (
        <> 
            <div className="flex justify-end gap-2">
                <SelectInput 
                    handlerInputChange={handlerInputChange}
                    name='category'
                    value={formData.category}
                    options={categories}
                />
                <TextInput 
                    handlerInputChange={handlerInputChange}
                    name='title'
                    placeholder = 'Título ...'
                    value={formData.title}
                />

                <FormSubmit 
                    handlerSubmit={handlerSubmit}
                />
 
            </div>        
        </>
    )
}

export default PostListFilter