import { useDispatch, useSelector } from "react-redux"
import { updateRoles } from "../../../../features/user/actions";
import loadingImage from '../../../../assets/loading.gif'; 
import { capitalize } from "../../../../utils";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { updateUser } from "../../../../features/user/usersSlice";

const UserRolesForm = () => {
    const { user } = useSelector((state) => state.users)
    const { roles } = useSelector((state) => state.app)

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');

    const initialRoles = {}

    const getRole = (role) => {
        const roleUser = user.roles.find((userRole) => userRole.name === role)
        return {
            name: role,
            hasRole: !!roleUser,
            isEnable: roleUser && roleUser.isEnable
        }
    }
    roles.forEach((role) => initialRoles[role] = getRole(role)) 

    const [stateRoles, setStateRoles] = useState(initialRoles)
    
    const dispatch = useDispatch();

    const handleClick = () => {
        setLoading(true)
        const newRoles = 
            Object.values(stateRoles)
                .filter(role => role.hasRole)
                .map(role => ({name: role.name, isEnable: role.isEnable}))

        dispatch(updateRoles({
            id: user._id, 
            roles: newRoles})).unwrap()
                .then((resp) => {
                    setResult('succeeded')
                    dispatch(updateUser({id: user._id, roles: resp.data.roles}))
                })
                .catch(() => setResult('failed'))
                .finally(() => {setLoading(false)})
    }

    const handleClickToggle = (roleName) => {
        if ( !stateRoles[roleName].hasRole ) {
            setStateRoles({...stateRoles, [roleName]: {...stateRoles[roleName], hasRole: true, isEnable: true}})
            return
        }
        
        if ( stateRoles[roleName].hasRole ) {
            setStateRoles({...stateRoles, [roleName]: {...stateRoles[roleName], isEnable: !stateRoles[roleName].isEnable}})
            return
        }

    }
    const handleClickRemove = (roleName) => {
        setStateRoles({...stateRoles, [roleName]: {...stateRoles[roleName], hasRole: false, isEnable: undefined}})
    }
    return (
        <>
            <div className="py-3 border border-slate-200">
                <div className="flex items-start">
                    <label htmlFor="" className="w-40 pl-10 font-bold">Permisos</label>
                    <div className=" flex  gap-2 text-md">
                        {Object.keys(initialRoles).map((key, index) => 
                        <div 
                            className=" flex items-center gap-2 border border-slate-200 p-1"
                            key={key + '-' + index}>
                                <div 
                                    onClick={() => handleClickToggle(stateRoles[key].name)}
                                    className={`cursor-pointer w-36 text-center ${stateRoles[key].hasRole && stateRoles[key].isEnable ? 'bg-sky-500 text-white    ' : stateRoles[key].hasRole ? 'bg-slate-500' : ''} rounded`}>
                                    <span className={``}>{capitalize(stateRoles[key].name)}</span>
                                </div>
                            
                                <button
                                    disabled={!stateRoles[key].hasRole}
                                    onClick={() => handleClickRemove(stateRoles[key].name)}
                                    className={`${stateRoles[key].hasRole ? 'text-red-500' : 'text-slate-200'}`}
                                ><AiOutlineClose /></button>
                        </div>
                    )}
                    </div>
                    
                </div>
                <div className="flex items-start mt-4">
                    <div className="w-40"></div>
                    <div className=" flex items-center">
                        <button 
                            onClick={handleClick}
                            className={`bg-green-500 hover:bg-green-600 text-white font-bold w-28 rounded`}
                        >Guardar</button>
                        <div className="ml-5">
                            { loading && <img src={loadingImage} className="max-h-5 object-contain" />}
                            { !loading && result === 'succeeded' &&<FaCheck className="text-green-500" />}
                            { !loading && result === 'failed' && <span>Se ha producido un error</span>}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserRolesForm