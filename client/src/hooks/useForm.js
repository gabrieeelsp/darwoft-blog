import { useState } from 'react'

const validateField = (validator, field, value) => {
    return validator[field] ? validator[field](value) : null;
}

const useForm = ({initialState = {}, onSubmit, validator}) => {

    const [showResponseMessage, setShowResponseMessage] = useState(false)

    const [formData, setFormData] = useState({...initialState});

    const initialErros = {...initialState}
    for ( let property in initialErros ) initialErros[property] = '';
    const [formErrors, setFormErrors] = useState({...initialErros})

    const handlerInputChange = (event) => {
        setShowResponseMessage(false);

        const property = event.target.name;

        const value = event.target.type === 'checkbox'
            ? event.target.checked 
            : event.target.value;
            
        setFormData({...formData, [property]: value})
        setFormErrors({...formErrors, [property]: validateField(validator, property, value)})
    }

    const handlerSubmit = (event) => {
        event.preventDefault();

        const errors = {};
        Object.keys(formData).forEach((property) => {
            errors[property] = validateField(validator, property, formData[property])
        })

        setFormErrors(errors)
        if ( Object.values(errors).some((value) => value) ) return

        onSubmit();
        setShowResponseMessage(true)
    }

    return {
        formData,
        formErrors,
        handlerInputChange,
        handlerSubmit,
        showResponseMessage,
    }
}

export default useForm;