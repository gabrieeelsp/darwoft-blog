import { useSelector } from "react-redux"

import { capitalize } from '../../../../utils'
import UserStatusForm from "./UserStatusForm"

const UserData = () => {
    const { user } = useSelector((state) => state.users)
    return (
        <>
            <div className="pr-5">
                <div className="grid grid-cols-12">
                    <label htmlFor="" className="col-span-12 sm:col-span-2 md:col-span-3 font-bold">Nombres</label>
                    <span className="col-span-12 sm:col-span-10 md:col-span-9 border-b border-slate-200">{capitalize(user.name)}</span>
                </div>
                <div className="grid grid-cols-12 mt-1">
                    <label htmlFor="" className="col-span-12 sm:col-span-2 md:col-span-3 font-bold">Apellidos</label>
                    <span className="col-span-12 sm:col-span-10 md:col-span-9 border-b border-slate-200">{capitalize(user.surname)}</span>
                </div>
                <div className="grid grid-cols-12 mt-1">
                    <label htmlFor="" className="col-span-12 sm:col-span-2 md:col-span-3 font-bold">Género</label>
                    <span className="col-span-12 sm:col-span-10 md:col-span-9 border-b border-slate-200">{capitalize(user.gender)}</span>
                </div>
                <div className="grid grid-cols-12 mt-1">
                    <label htmlFor="" className="col-span-12 sm:col-span-2 md:col-span-3 font-bold">Email</label>
                    <span className="col-span-12 sm:col-span-10 md:col-span-9 border-b border-slate-200">{capitalize(user.email)}</span>
                </div>
                <UserStatusForm />
            </div>
        </>
    )
}

export default UserData