import { NavLink } from "react-router-dom"
import { FaRegUser, FaAlignJustify, FaUsers } from "react-icons/fa";

import { useSelector } from "react-redux";
import { haveSomeRole } from "../../../utils";

const UserInfoMenu = () => {
    const { user } = useSelector((state) => state.auth)
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
                            <span className="">Perfil</span><FaRegUser className="text-xs" />
                        </div>
                    
                </NavLink>
                <NavLink
                    to="/perfil/datos-personales"
                    end
                    className={({ isActive }) => isActive ? "bg-sky-400 text-white rounded-md" : "rounded-md" }
                    >
                        <div className="flex justify-between items-center uppercase px-2 py-1">
                            <span className="">Mis Datos</span><FaRegUser className="text-xs" />
                        </div>
                    
                </NavLink>
                {user && haveSomeRole(user, ['autor']) &&
                <NavLink to='/perfil/publicaciones'
                    className={({ isActive }) => isActive ? "bg-sky-400 text-white rounded-md" : "rounded-md" }
                >
                    <div className="flex justify-between items-center uppercase px-2 py-1">
                            <span className="">Publicaciones</span><FaAlignJustify className="text-xs" />
                        </div>
                </NavLink>
                }
                {user && haveSomeRole(user, ['administrador']) &&
                <>
                <NavLink to='/perfil/users'
                    className={({ isActive }) => isActive ? "bg-sky-400 text-white rounded-md" : "rounded-md" }
                >
                    <div className="flex justify-between items-center uppercase px-2 py-1">
                            <span className="">Usuarios</span><FaUsers className="text-xs" />
                        </div>
                </NavLink>
                <NavLink to='/perfil/categorias'
                    className={({ isActive }) => isActive ? "bg-sky-400 text-white rounded-md" : "rounded-md" }
                >
                    <div className="flex justify-between items-center uppercase px-2 py-1">
                            <span className="">Categorias</span><FaUsers className="text-xs" />
                        </div>
                </NavLink>
                </>
                }

            </div>
        </>
    )
}

export default UserInfoMenu