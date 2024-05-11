import { Link, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { FiPlus } from "react-icons/fi";
import { findAll } from "../../../../features/user/actions";
import { UsersList as UsersListComponent } from "../../../../components";

const UsersList = () => {
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
                <span>Mis Publicaciones</span>  
                <Link 
                    to='nuevo'
                        className="flex gap-2 items-center bg-sky-500 hover:bg-sky-600 text-white  px-3 h-6 rounded-sm"
                        >
                            <FiPlus />
                            <span>Nuevo</span>
                        
                    </Link>  
            </div>
            <div className="p-6">
                {users && <UsersListComponent />}
            </div>
            
            
            
        </>
    )
}

export default UsersList