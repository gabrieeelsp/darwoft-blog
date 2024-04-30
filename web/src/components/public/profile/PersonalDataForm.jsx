import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateField } from "../../../validators";
import { userValidator as validator } from "../../../validators/userValidator";
import loading from '../../../assets/loading.gif'
import { update } from "../../../features/user/usersSlice";
import { capitalize } from "../../../utils"

const PersonalDataForm = () => {
    const dispatch = useDispatch(); 
    const { user, status, error } = useSelector((state) => state.users)
    const { genders } = useSelector((state) => state.app)
    const [isShowMessage, setIsShowMessage] = useState(false)

    const formFields = {
        name: '',
        surname: '',
        gender: '',
    }

    const [formData, setFormData] = useState({
        name: user.name, 
        surname: user.surname, 
        gender: user.gender
    })

    const [formErrors, setFormErrors] = useState({...formFields})

    const handlerChange = (event) => {
        setIsShowMessage(false)

        const property = event.target.name;
        const value = event.target.value;

        setFormData({...formData, [property]: value})

        setFormErrors({...formErrors, [property]: validateField(validator, property, value, 'update')})
    }

    const handlerSubmit = (event) => {
        event.preventDefault();

        const errors = {};
        Object.keys(formData).forEach((property) => {
            errors[property] = validateField(validator, property, formData[property], 'update')
        })

        setFormErrors(errors)

        if ( Object.values(errors).some((value) => value) ) return

        dispatch(update({...formData, id: user._id}))
        setIsShowMessage(true)
    }

    return (
        <>
            <form onSubmit={handlerSubmit} >
                <div className="p-3">
                    <div className="grid grid-cols-12 items-center">
                        <label className="col-start-2 col-span-2" htmlFor="name">Nombres</label>
                        <input 
                            type="text" 
                            name="name"
                            className="col-span-9 focus:outline-none border border-slate-300 px-2 py-1 shadow-md" 
                            value={formData.name} 
                            onChange={handlerChange}
                            />
                        <div className="col-start-4 col-span-9  min-h-4 mt-1 ml-2 text-xs text-red-400">{ formErrors.name }</div>
                    </div>
                    <div className="grid grid-cols-12 items-center">
                        <label className="col-start-2 col-span-2" htmlFor="surname">Apellidos</label>
                        <input 
                            type="text" 
                            name="surname"
                            className="col-span-9 focus:outline-none border border-slate-300 px-2 py-1 shadow-md" 
                            value={formData.surname} 
                            onChange={handlerChange}
                            />
                        <div className="col-start-4 col-span-9  min-h-4 mt-1 ml-2 text-xs text-red-400">{ formErrors.surname }</div>
                    </div>
                    <div className="grid grid-cols-12 items-center">
                        <label className="col-start-2 col-span-2" htmlFor="gender">Género</label>
                        <select
                            value={formData.gender} 
                            name="gender"
                            onChange={handlerChange}
                            className={`col-span-9 focus:outline-none bg-white border border-slate-300 rounded-sm px-2 py-1 shadow-md ${formData.gender ? '' : 'text-slate-300'} `}
                        >
                            <option value="" className="text-slate-300" >---</option>
                            { genders.map((g) => <option value={g} key={'opntion-'+g} className="text-slate-800" >{capitalize(g)}</option>) }
                        </select>
                        <div className="col-start-4 col-span-9  min-h-4 mt-1 ml-2 text-xs text-red-400">{ formErrors.gender }</div>
                    </div>
                    <div className="grid grid-cols-12 mt-2">
                        <div className="col-start-4 col-span-8">
                            <button 
                                className=" bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-1 px-4 rounded"
                                type="submit"
                                disabled={isShowMessage && status === 'pending'}
                            >Guardar</button>
                            <div className="min-h-5 max-h-5 mt-2 ml-2 text-sm text-red-400 ">
                                { isShowMessage && status === 'pending' && <img src={loading} className="max-h-5 object-contain" />}
                                { isShowMessage && status === 'succeeded' && <span className="text-green-800">Su perfil se ha actualizado exitosamente</span>}
                                { isShowMessage && status === 'error' && !error.data && <span>{error.message}</span>}
                                { isShowMessage && status === 'error' && error.data && <ul>{error.data.map(e => <li key={e.field}>{e.message}</li>)}</ul>}
                            </div>
                        </div>
                    </div>
                </div>
                
            </form>
        </>
    )
}

export default PersonalDataForm