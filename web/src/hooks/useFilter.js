import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const useFilter = (initialState = {}) => {
    const [currentQueryParameters, setSearchParams] = useSearchParams();

    Object.keys(initialState).forEach((property) => {
        initialState[property] = currentQueryParameters.get(property) || ''
    })

    const [formData, setFormData] = useState({...initialState});

    const handlerInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setFormData({...formData, [property]: value})
    }

    const handlerSubmit = (event) => {
        event.preventDefault();

        Object.keys(formData).forEach((property) => {
            currentQueryParameters.delete(property)
            if ( formData[property] )
                currentQueryParameters.set(property, formData[property])
        })

        currentQueryParameters.delete('page')

        setSearchParams(currentQueryParameters)
    }

    return {
        formData,
        handlerInputChange,
        handlerSubmit,
    }
}

export default useFilter;