import { useDispatch, useSelector } from "react-redux"
import { capitalize } from "../../../utils"
import { logout } from "../../../features/auth/authSlice"
import { useNavigate } from "react-router-dom"

const SideBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { name, surname, roles } = useSelector((state) => state.auth.user)

    const handlerLogout = async () => {
        try {
            await dispatch(logout()).unwrap();
            navigate('/');
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="flex flex-col items-center py-3 px-2 ">
                <div className="w-20 h-20 rounded-full border border-slate-400 bg-slate-200"></div>
                <span className="mt-2 text-slate-800 text-center">{ `${capitalize(name, true)} ${capitalize(surname, true)}` }</span>
                <span className="text-sm italic text-slate-500">
                    { roles.map((rol) => capitalize(rol.name)).join(' - ') }
                </span>
                <span className="text-sm italic text-slate-500 mt-20">Vistas: 524</span>
                <span className="text-sm italic text-slate-500">Comentarios: 684</span>
                <span className="text-sm italic text-slate-500">Seguidores: 24</span>
                <button 
                    onClick={handlerLogout}
                    className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-4 rounded text-sm"
                    >Salir</button>
            </div>
        </>
    )
}

export default SideBar