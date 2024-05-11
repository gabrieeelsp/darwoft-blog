import { useDispatch, useSelector } from "react-redux"
import { update } from "../../../../features/user/actions";
import loadingImage from '../../../../assets/loading.gif'; 
import { LiaExchangeAltSolid } from "react-icons/lia";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { updateUser } from "../../../../features/user/usersSlice";


const UserStatusForm = () => {
    const { user } = useSelector((state) => state.users)
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(false);

    const handleClick = () => {
        setLoading(true)
        dispatch(update({id: user._id, isEnable: !user.isEnable})).unwrap()
            .then((resp) => {
                setResult('succeeded')
                dispatch(updateUser({id: user._id, isEnable: resp.data.user.isEnable}))
            })
            .catch(() => setResult('failed'))
            .finally(() => {setLoading(false)})
    }

    return (
        <>
            <div className=" ">
                <div className="flex items-end">
                    <label htmlFor="" className="w-40 pl-10 font-bold">Estado</label>
                    <span className="border-b border-slate-200 w-36">
                        {user.isEnable ? <span className="text-green-500 font-bold">Habilitado</span> : <span className="font-bold">Desabilitado</span> }
                    </span>
                    <div className="flex items-center">
                        <button 
                            onClick={handleClick}
                            className={`${user.isEnable ? 'bg-slate-500 hover:bg-slate-600' : 'bg-green-500 hover:bg-green-600'} text-white px-2 py-1 ml-5 font-bold rounded`}
                        ><LiaExchangeAltSolid /></button>
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

export default UserStatusForm