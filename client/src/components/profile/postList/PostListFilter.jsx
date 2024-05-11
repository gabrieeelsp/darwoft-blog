import { useSelector } from "react-redux";
import useFilter from "../../../hooks/useFilter";
import { FormSubmitFilter, SelectInputFilter, TextInputFilter } from "../../"

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
                <SelectInputFilter 
                    handlerInputChange={handlerInputChange}
                    name='category'
                    value={formData.category}
                    options={Object.keys(categories).map((c) => (categories[c]))}
                />
                <TextInputFilter 
                    handlerInputChange={handlerInputChange}
                    name='title'
                    placeholder = 'Título ...'
                    value={formData.title}
                />

                <FormSubmitFilter 
                    handlerSubmit={handlerSubmit}
                />
 
            </div>        
        </>
    )
}

export default PostListFilter