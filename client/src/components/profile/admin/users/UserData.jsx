import { useSelector } from "react-redux"

import { capitalize } from '../../../../utils'

const UserData = () => {
    const { user } = useSelector((state) => state.users)
    return (
        <>
            <div className=" pr-5">
                <div className="flex items-end">
                    <label htmlFor="" className="w-40 pl-10 font-bold">Nombre</label>
                    <span className=" flex-1 border-b border-slate-200">{capitalize(user.name)}</span>
                </div>
                <div className="flex items-end mt-3">
                    <label htmlFor="" className="w-40 pl-10 font-bold">Apellido</label>
                    <span className="flex-1 border-b border-slate-200">{capitalize(user.surname)}</span>
                </div> 
                <div className="flex items-end mt-3">
                    <label htmlFor="" className="w-40 pl-10 font-bold">Genero</label>
                    <span className="flex-1 border-b border-slate-200">{capitalize(user.gender)}</span>
                </div> 
                <div className="flex items-end mt-3">
                    <label htmlFor="" className="w-40 pl-10 font-bold">Email</label>
                    <span className="flex-1 border-b border-slate-200">{user.email}</span>
                </div>
            </div>
        </>
    )
}

export default UserData