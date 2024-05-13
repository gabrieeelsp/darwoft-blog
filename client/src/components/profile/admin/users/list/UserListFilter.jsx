import useFilter from "../../../../../hooks/useFilter";
import { FormSubmitFilter, TextInputFilter } from "../../../../"

const UserListFilter = () => {
    const formFields = {
        name: '',
    }

    const { formData, handlerInputChange, handlerSubmit } = useFilter(formFields)

    return (
        <> 
            <div className="flex flex-col md:flex-row md:justify-end gap-2">
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

export default UserListFilter