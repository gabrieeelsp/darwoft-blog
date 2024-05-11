import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";


import { findOne } from "../../../../features/user/actions";
import { cleanSlice } from "../../../../features/user/usersSlice";
import { UserData, UserRolesForm, UserStatusForm } from "../../../../components";
import ImageNotFound from '../../../../assets/Image-not-found.png'

const UserEdit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.users)
    const { userId } = useParams();
    const { roles } = useSelector((state) => state.app)

    const [tabSelected, setTabSelected] = useState('info') // info | comments | posts

    useEffect(() => {
        dispatch(findOne(userId));

        return () => {
            dispatch(cleanSlice())
        }
    }, [dispatch, userId])

    return (
        <>
            <div className="flex justify-between gap-3 py-3 px-3 text-md bg-gray-50 border-b border-b-slate-200 font-bold text-slate-600">
                <div>
                    <button className="hover:text-sky-500" onClick={() =>navigate(-1)}>Mis Publicaciones</button> / <span>Editar</span>
                </div>
            </div>
            <div className="flex gap-5 border-b border-slate-200 mr-3 ml-10 my-4 pb-1">
                <button 
                    onClick={() => setTabSelected('info')} 
                    className={`${tabSelected === 'info' ? 'text-sky-700' : ''} font-bold`}
                    >Info</button>
                <button 
                    onClick={() => setTabSelected('comments')}
                    className={`${tabSelected === 'comments' ? 'text-sky-700' : ''} font-bold`}
                    >Comentarios</button>
            </div>
            <div className="px-10">
                {user && tabSelected === 'info' && <>
                    <div className="">
                        <div className="flex ">
                            <div className="flex-1">
                                <UserData />
                            </div>
                            <div className="w-36 border border-slate-300 shadow-md">
                                {user.image && <img className="w-full h-full object-cover" src={`http://localhost:8001/images/${user.image}`} />}
                                {!user.image && <img className="w-full h-full object-cover" src={ImageNotFound} />}
                            </div>
                        </div>
                        <div className="mt-5">
                            <UserStatusForm />
                        </div>

                        <div className="mt-5">
                            <UserRolesForm />
                        </div>
                    </div>
                </> }
                {user && tabSelected === 'comments' && <span>Coments</span> }
            </div>
            
        </>
    )
}

export default UserEdit