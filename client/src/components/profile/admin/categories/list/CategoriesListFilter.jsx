import useFilter from "../../../../../hooks/useFilter";
import { FormSubmitFilter, TextInputFilter } from "../../../.."

const CategoriesListFilter = () => {
    const formFields = {
        name: '',
    }

    const { formData, handlerInputChange, handlerSubmit } = useFilter(formFields)

    return (
        <> 
            <div className="flex justify-end gap-2">
                <TextInputFilter 
                    handlerInputChange={handlerInputChange}
                    name='name'
                    placeholder = 'Nombre ...'
                    value={formData.name}
                />

                <FormSubmitFilter 
                    handlerSubmit={handlerSubmit}
                />
 
            </div>        
        </>
    )
}

export default CategoriesListFilter