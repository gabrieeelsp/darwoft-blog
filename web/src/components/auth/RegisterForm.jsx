import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { validateField } from "../../validators";
import { userValidator as validator } from "../../validators/userValidator";
import { register } from "../../features/auth/authSlice";
import { useSelector } from 'react-redux';
import loading from '../../assets/loading.gif'

const RegisterForm = () => {
    const dispatch = useDispatch(); 
    const { status, error } = useSelector((state) => state.auth)
    const [isShowMessage, setIsShowMessage] = useState(false)

    const formFields = {
        name: '',
        surname: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    }
    const [formData, setFormData] = useState({...formFields})

    const [formErrors, setFormErrors] = useState({...formFields})

    const handlerChange = (event) => {
        setIsShowMessage(false)

        const property = event.target.name;
        const value = event.target.value;

        setFormData({...formData, [property]: value})

        setFormErrors({...formErrors, [property]: validateField(validator, property, value, 'register')})
    }

    const handlerSubmit = (event) => {
        event.preventDefault();

        const errors = {};
        Object.keys(formData).forEach((property) => {
            errors[property] = validateField(validator, property, formData[property], 'register')
        })

        setFormErrors(errors)

        if ( Object.values(errors).some((value) => value) ) return

        dispatch(register(formData))
        setIsShowMessage(true)
    }

    
    
    return (
        <>
            <form onSubmit={handlerSubmit} >
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4 flex flex-col border-purple-400 border-t-8">
                    <div className="mb-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="name">Nombre</label>
                        <input type="text" id="name" className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="Nombre" name="name" onChange={handlerChange} />
                        <div className="min-h-4 mt-1 ml-2 text-xs text-red-400">{ formErrors.name }</div>
                    </div>
                    <div className="mb-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="surname">Apellido</label>
                        <input type="text" id="surname" className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="Apellido" name="surname" onChange={handlerChange} />
                        <div className="min-h-4 mt-1 ml-2 text-xs text-red-400">{ formErrors.surname }</div>
                    </div>
                    <div className="mb-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input type="text" id="email" className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="Email" name="email" onChange={handlerChange} />
                        <div className="min-h-4 mt-1 ml-2 text-xs text-red-400">{ formErrors.email }</div>
                    </div>

                    <div className="mb-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input type="password" className="shadow appearance-none text-sm border border-red rounded w-full py-2 px-3 text-grey-darker" id="password" placeholder="************" name="password" onChange={handlerChange} />
                        <div className="min-h-4 mt-1 ml-2 text-xs text-red-400">{ formErrors.password }</div>
                    </div>

                    <div className="mb-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="passwordConfirmation">Repetir Password</label>
                        <input type="password" className="shadow appearance-none text-sm border border-red rounded w-full py-2 px-3 text-grey-darker" id="passwordConfirmation" placeholder="************" name="passwordConfirmation" onChange={handlerChange} />
                        <div className="min-h-4 mt-1 ml-2 text-xs text-red-400">{ formErrors.passwordConfirmation }</div>
                    </div>

                    <div className="flex flex-col mt-2 mb-1">
                        <button 
                            className="bg-purple-500 w-full text-sm hover:bg-purple-700 disabled:bg-purple-300 text-white font-bold py-2 px-4 rounded" 
                            type="submit"
                            disabled={isShowMessage && status === 'pending'}
                            >
                            Crear cuenta
                        </button>
                        <div className="min-h-5 max-h-5 mt-2 ml-2 text-sm text-red-400 flex justify-center">
                            { isShowMessage && status === 'pending' && <img src={loading} className="max-h-5 object-contain" />}
                            { isShowMessage && status === 'succeeded' && <span className="text-green-800">Se ha Registrado exitosamente</span>}
                            { isShowMessage && status === 'error' && !error.data && <span>{error.message}</span>}
                            { isShowMessage && status === 'error' && error.data && <ul>{error.data.map(e => <li key={e.field}>{e.message}</li>)}</ul>}
                        </div>
                    </div>
                </div>

            </form>
            <div className="text-center">
                <p className="text-grey-dark text-sm text-slate-500">¿Ya tienes una cuenta? <Link to='/auth/login' className="no-underline text-blue font-bold text-purple-400 hover:text-purple-500">Ingresar</Link>.</p>
            </div>
        </>
    )
}

export default RegisterForm
