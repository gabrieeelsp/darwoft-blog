import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateField } from "../../../validators";
import { postValidator as validator } from "../../../validators/postValidator";
import loading from '../../../assets/loading.gif'
import { capitalize } from "../../../utils"
import { create } from "../../../features/posts/postsSlice";

const PersonalDataForm = () => {
    const dispatch = useDispatch(); 
    const { status, error } = useSelector((state) => state.posts)
    const [isShowMessage, setIsShowMessage] = useState(false)
    const { categories } = useSelector((state) => state.app)

    const formFields = {
        title: '',
        categoryId: '',
    }

    const [formData, setFormData] = useState({...formFields})

    const [formErrors, setFormErrors] = useState({...formFields})

    const handlerChange = (event) => {
        setIsShowMessage(false)

        const property = event.target.name;
        const value = event.target.value;

        setFormData({...formData, [property]: value})

        setFormErrors({...formErrors, [property]: validateField(validator, property, value, 'create')})
    }

    const handlerSubmit = (event) => {
        event.preventDefault();

        const errors = {};
        Object.keys(formData).forEach((property) => {
            errors[property] = validateField(validator, property, formData[property], 'create')
        })

        setFormErrors(errors)

        if ( Object.values(errors).some((value) => value) ) return

        dispatch(create({...formData}))
        setIsShowMessage(true)
    }

    return (
        <>
            <form onSubmit={handlerSubmit} >
                <div className="p-3">
                    <div className="grid grid-cols-12 items-center">
                        <label className="col-start-2 col-span-2" htmlFor="title">Título</label>
                        <input 
                            type="text" 
                            name="title"
                            className="col-span-9 focus:outline-none border border-slate-300 px-2 py-1 shadow-md" 
                            value={formData.title} 
                            onChange={handlerChange}
                            />
                        <div className="col-start-4 col-span-9  min-h-4 mt-1 ml-2 text-xs text-red-400">{ formErrors.title }</div>
                    </div>
                    <div className="grid grid-cols-12 items-center">
                        <label className="col-start-2 col-span-2" htmlFor="categoryId">Categoría</label>
                        <select
                            value={formData.categoryId} 
                            name="categoryId"
                            onChange={handlerChange}
                            className={`col-span-9 focus:outline-none bg-white border border-slate-300 rounded-sm px-2 py-1 shadow-md ${formData.gender ? '' : 'text-slate-300'} `}
                        >
                            <option value="" className="text-slate-300" >---</option>
                            { categories && categories.map((c) => <option value={c._id} key={c._id} className="text-slate-800" >{capitalize(c.name)}</option>) }
                        </select>
                        <div className="col-start-4 col-span-9  min-h-4 mt-1 ml-2 text-xs text-red-400">{ formErrors.categoryId }</div>
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
                                { isShowMessage && status === 'succeeded' && <span className="text-green-800">Su publicación se ha creado exitosamente</span>}
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