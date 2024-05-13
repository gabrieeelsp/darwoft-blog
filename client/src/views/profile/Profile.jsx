import { useDispatch, useSelector } from "react-redux"
import { capitalize } from "../../utils"
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { useEffect } from "react";
import { findProfileInfo } from "../../features/auth/actions";
import { LastPostsViewed } from "../../components";
import { useOutletContext } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Profile = () => {
    const [ setShowCartSidebar ] = useOutletContext()
    const { user } = useSelector((state) => state.auth)
    const { categories } = useSelector((state) => state.app)
    const dispatch = useDispatch();

    const userId = user._id;
    useEffect(() => {
        dispatch(findProfileInfo(userId))
    }, [dispatch, userId])
    
    return (
        <>
            <div className="flex justify-between items-center gap-3 py-3 px-3 text-md bg-gray-50 border-b border-b-slate-200 font-bold text-slate-600">
                <div className="flex items-center gap-3">
                    <button className="md:hidden" onClick={() => setShowCartSidebar(true)}>
                        <RxHamburgerMenu className="text-xl" />
                    </button>
                    <span>Perfil</span>
                </div>   
            </div>
            <div className="p-8">
                <h1 className="text-3xl font-bold border-b border-slate-200 pb-2">{capitalize(user.name, true)} {capitalize(user.surname, true)}</h1>
                <div>
                    {user.roles.map((role) =>
                        <div key={role.name}><span className="font-bold text-sm text-slate-600">{capitalize(role.name)}</span> <span className="text-sm text-slate-500">{formatDistanceToNow(role.createdAt, { addSuffix: false, locale: es })}</span></div>
                    )}
                </div>

                

                {user.lastPostsViewed && categories && <LastPostsViewed />}
            </div>
        </>
    )
}

export default Profile