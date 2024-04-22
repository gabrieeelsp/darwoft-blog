import { NavLink } from "react-router-dom"

const ProfileMenu = () => {
    return (
        <>
            <div
                className=" flex gap-3 p-2"
            >
                <NavLink to='/perfil'>Mis Datos</NavLink>
                <NavLink to='/perfil/publicaciones'>Mis Artículos</NavLink>


            </div>
        </>
    )
}

export default ProfileMenu