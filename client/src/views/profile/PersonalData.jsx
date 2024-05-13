import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { findOne } from "../../features/user/actions";
import { EditUserImageForm, PersonalDataForm } from "../../components";
import { RxHamburgerMenu } from "react-icons/rx";
import { useOutletContext } from "react-router-dom";

const PersonalData = () => {
    const [ setShowCartSidebar ] = useOutletContext()
    const dispatch = useDispatch();
    const { _id } = useSelector((state) => state.auth.user)
    const { user } = useSelector((state) => state.users)

    const [tabSelected, setTabSelected] = useState('info')

    useEffect(() => {
        dispatch(findOne(_id))
    }, [dispatch, _id])

    return (
        <>
            <div className="flex justify-between gap-3 py-3 px-3 text-md bg-gray-50 border-b border-b-slate-200 font-bold text-slate-600">

                <div className="flex items-center gap-3">
                    <button className="md:hidden" onClick={() => setShowCartSidebar(true)}>
                        <RxHamburgerMenu className="text-xl" />
                    </button>
                    <span>Datos personales</span>
                </div>
            </div>
            <div className="flex gap-5 border-b border-slate-200 mr-3 ml-16 my-4 pb-1">
                <button 
                    onClick={() => setTabSelected('info')} 
                    className={`${tabSelected === 'info' ? 'text-sky-700' : ''} font-bold`}
                    >Info</button>
                <button 
                    onClick={() => setTabSelected('image')}
                    className={`${tabSelected === 'image' ? 'text-sky-700' : ''} font-bold`}
                    >Imagen</button>
            </div>
            { user && tabSelected === 'info' && <PersonalDataForm />}
            { user && tabSelected === 'image' && <EditUserImageForm />}
        </>
    )
}

export default PersonalData