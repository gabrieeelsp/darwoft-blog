import { NavLink } from "react-router-dom"
import { FaRegUser, FaAlignJustify } from "react-icons/fa";

const UserMenu = () => {
    return (
        <>
            <div
                className="flex flex-col w-[90%] text-sm gap-2 mt-10"
            >
                <NavLink
                    to="/perfil"
                    end
                    className={({ isActive }) => isActive ? "bg-sky-400 text-white rounded-md" : "rounded-md" }
                    >
                        <div className="flex justify-between items-center uppercase px-2 py-1">
                            <span className="">Mis Datos</span><FaRegUser className="text-xs" />
                        </div>
                    
                </NavLink>
                <NavLink to='/perfil/publicaciones'
                    className={({ isActive }) => isActive ? "bg-sky-400 text-white rounded-md" : "rounded-md" }
                >
                    <div className="flex justify-between items-center uppercase px-2 py-1">
                            <span className="">Publicaciones</span><FaAlignJustify className="text-xs" />
                        </div>
                </NavLink>


            </div>
        </>
    )
}

export default UserMenu