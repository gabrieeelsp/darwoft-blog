import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { userValidator as validator } from "../../validators/userValidator"
import { validateField } from "../../validators"
import { login } from "../../features/auth/authSlice"
import { useSelector } from 'react-redux';
import loading from '../../assets/loading.gif'


const LoginForm = () => {
    const dispatch = useDispatch()
    const { status, error } = useSelector((state) => state.auth)
    const [isShowMessage, setIsShowMessage] = useState(false)
    

    const formFields = {
        email: '',
        password: '',
    }
    const [formData, setFormData] = useState({...formFields})

    const [formErrors, setFormErrors] = useState({...formFields})

    const [isRememberMe, setIsRememberMe] = useState(false)
    
    const handlerChange = (event) => {
        setIsShowMessage(false)

        const property = event.target.name;
        const value = event.target.value;

        setFormData({...formData, [property]: value})

        setFormErrors({...formErrors, [property]: validateField(validator, property, value, 'login')})
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        
        const errors = {}
        Object.keys(formData).forEach((property) => {
            errors[property] = validateField(validator, property, formData[property], 'login');
        })
        setFormErrors(errors)
        
        if ( Object.values(errors).some((value) => value) ) return
        
        setIsShowMessage(true)
        dispatch(login({...formData, isRememberMe}))
    }

    return (
        <>
            <form onSubmit={handlerSubmit} >

                <div className="bg-white shadow-md rounded px-8 pt-6 pb-4 mb-4 flex flex-col border-purple-400 border-t-8">
                    <div className="mb-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input type="text" id="email" className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-grey-darker focus:outline-none" placeholder="Email" name="email" onChange={handlerChange} />
                        <div className="min-h-4 mt-1 ml-2 text-xs text-red-400">{formErrors.email}</div>
                    </div>

                    <div className="mb-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input type="password" className="shadow appearance-none text-sm border border-red rounded w-full py-2 px-3 text-grey-darker focus:outline-none" id="password" placeholder="************"  name="password" onChange={handlerChange} />
                        <div className="min-h-4 mt-1 ml-2 text-xs text-red-400">{formErrors.password}</div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex align-middle">
                            <input type="checkbox" name="" id="remember_me" className="cursor-pointer" value={isRememberMe} onChange={() => setIsRememberMe(oldValue => !oldValue)} />
                            <label htmlFor="remember_me" className="ml-2 text-sm cursor-pointer">Recordarme</label>
                        </div>
                        
                        <Link to="#" className="inline-block align-baseline text-purple-400 font-bold text-sm text-blue hover:text-purple-500" >
                            Olvidaste la contraseña?
                        </Link>
                    </div>

                    <div className="flex flex-col mb-1">
                        <button 
                            className="bg-purple-500 w-full text-sm hover:bg-purple-700 disabled:bg-purple-300 text-white font-bold py-2 px-4 rounded" 
                            type="submit"
                            disabled={isShowMessage && status === 'pending'}
                            >
                            Sign In
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
                    <p className="text-grey-dark text-sm text-slate-500">¿No tienes una cuenta? <Link to='/auth/register' className="no-underline text-blue font-bold text-purple-400 hover:text-purple-500">Crear una cuenta</Link>.</p>
                </div>
        </>
    )
}

export default LoginForm