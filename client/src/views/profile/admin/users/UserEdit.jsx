import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";


import { findOne } from "../../../../features/user/actions";
import { cleanSlice } from "../../../../features/user/usersSlice";
import { UserComments, UserData, UserRolesForm, UserStatusForm } from "../../../../components";
import ImageNotFound from '../../../../assets/Image-not-found.png'
import { RxHamburgerMenu } from "react-icons/rx";

const UserEdit = () => {
    const [ setShowCartSidebar ] = useOutletContext()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.users)
    const { userId } = useParams();

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

                <div className="flex items-center gap-3">
                    <button className="md:hidden" onClick={() => setShowCartSidebar(true)}>
                        <RxHamburgerMenu className="text-xl" />
                    </button>
                    <button className="hover:text-sky-500" onClick={() =>navigate(-1)}>Mis Publicaciones</button> / <span>Editar</span>
                </div> 
            </div>
            <div className="flex gap-5 border-b border-slate-200 mr-3 ml-4 sm:ml-10 my-4 pb-1">
                <button 
                    onClick={() => setTabSelected('info')} 
                    className={`${tabSelected === 'info' ? 'text-sky-700' : ''} font-bold`}
                    >Info</button>
                <button 
                    onClick={() => setTabSelected('comments')}
                    className={`${tabSelected === 'comments' ? 'text-sky-700' : ''} font-bold`}
                    >Comentarios</button>
            </div>
            <div className="">
                {user && tabSelected === 'info' && <>
                    <div className="ml-4 sm:ml-10">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 md:col-span-8">
                                <UserData />
                            </div>
                            <div className="col-span-12 md:col-span-4">
                                <div className="w-[70%] mx-auto mt-5 md:mt-0 border border-slate-300 shadow-md">
                                    {user.image && <img className="w-full h-full object-cover" src={`${import.meta.env.VITE_URL_API}/images/${user.image}`} />}
                                    {!user.image && <img className="w-full h-full object-cover" src={ImageNotFound} />}
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <UserRolesForm />
                        </div>
                    </div>
                </> }
                {user && tabSelected === 'comments' && <UserComments /> }
            </div>
            
        </>
    )
}

export default UserEdit