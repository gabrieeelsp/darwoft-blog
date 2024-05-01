import { NavLink } from "react-router-dom"

const ProfileMenu = () => {
    return (
        <>
            <div
                className="flex gap-3 py-3 px-3 bg-gray-50 border-b border-b-slate-200 font-bold text-slate-600"
            >
                <NavLink
                    to="/perfil"
                    end
                    className={({ isActive }) => isActive ? "text-sky-500" : ""
                    }
                    >
                    Mis Datos
                </NavLink>
                <NavLink to='/perfil/publicaciones'
                    className={({ isActive }) => isActive ? "text-sky-500" : ""
                }
                >Mis Artículos</NavLink>


            </div>
        </>
    )
}

export default ProfileMenu