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
            <div className="mt-5  border border-slate-200 rounded p-2 mb-3">
                <div className="grid grid-cols-12 sm:items-center">
                    <label htmlFor="" className="col-span-12 sm:col-span-2 font-bold">Permisos</label>
                    <div className="col-span-12 sm:col-span-8 flex  items-center gap-2">
                        {Object.keys(initialRoles).map((key, index) =>
                            <div key={key + '-' + index}
                                className="w-[60%] sm:w-[40%] lg:w-[30%] flex p-1 border border-slate-200 rounded gap-2"
                            >
                                <span
                                    onClick={() => handleClickToggle(stateRoles[key].name)}
                                    className={`cursor-pointer text-center flex-1 rounded  ${stateRoles[key].hasRole && stateRoles[key].isEnable ? 'bg-sky-500 text-white    ' : stateRoles[key].hasRole ? 'bg-slate-500' : ''}`}
                                >{capitalize(stateRoles[key].name)}</span>
                                <button
                                    disabled={!stateRoles[key].hasRole}
                                    onClick={() => handleClickRemove(stateRoles[key].name)}
                                    className={`${stateRoles[key].hasRole ? 'text-red-500' : 'text-slate-200'}`}
                                ><AiOutlineClose /></button>
                            </div>
                        )}
                    </div>
                    
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 sm:col-start-3 sm:col-span-9 flex items-center  ">
                        <button 
                            onClick={handleClick}
                            className={`bg-green-500 hover:bg-green-600 text-white font-bold  rounded px-2 mt-2`}
                        >Actualizar permisos</button>
                        <div className="mt-3 ml-5 ">
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