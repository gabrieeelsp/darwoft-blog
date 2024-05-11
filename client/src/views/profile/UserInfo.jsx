import { useSelector } from "react-redux"
import { capitalize } from "../../utils"

const UserInfo = () => {
    const { user } = useSelector((state) => state.auth)

    return (
        <>
            <div className="p-6">
                <h1 className="font-bold text-2xl">Perfil de {capitalize(user.name)}</h1>

                <div>
                    <div className="grid grid-cols-12 items-center">
                        <label className="col-start-2 col-span-2" htmlFor={name}>Nombre</label>
                        <span className="col-span-8">{capitalize(user.name)} {capitalize(user.surname)}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserInfo