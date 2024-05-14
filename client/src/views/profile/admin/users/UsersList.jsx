import { Link, useOutletContext, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { FiPlus } from "react-icons/fi";
import { findAll } from "../../../../features/user/actions";
import { UsersList as UsersListComponent } from "../../../../components";
import { RxHamburgerMenu } from "react-icons/rx";

const UsersList = () => {
    const [ setShowCartSidebar ] = useOutletContext()
    const dispatch = useDispatch()
    const { users } = useSelector((state) => state.users)
    const [currentQueryParameters] = useSearchParams();

    const name = currentQueryParameters.get('name')
    const limit = currentQueryParameters.get('limit')
    const page = currentQueryParameters.get('page')

    
    useEffect(() => {

        dispatch(findAll({
            name, 
            limit: limit ? limit : 6, 
            page: page ? page : 1}))
    }, [dispatch, name, limit, page])

    return (
        <>
            <div className="flex justify-between gap-3 py-3 px-3 text-md bg-gray-50 border-b border-b-slate-200 font-bold text-slate-600">
                <div className="flex items-center gap-3">
                    <button className="md:hidden" onClick={() => setShowCartSidebar(true)}>
                        <RxHamburgerMenu className="text-xl" />
                    </button>
                    <span>Gestión de usuarios</span>
                </div>   
            </div>
            <div className="p-6">
                {users && <UsersListComponent />}
            </div>
            
            
            
        </>
    )
}

export default UsersList