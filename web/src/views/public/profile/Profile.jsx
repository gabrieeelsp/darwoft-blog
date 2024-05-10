import { Outlet, useNavigate } from "react-router-dom"
import SideBar from "../../../components/public/profile/SideBar"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const Profile = () => {
    const { user, loading } = useSelector((state) => state.auth)
    const { categories } = useSelector((state) => state.app)

    const navigate = useNavigate();
    console.log('hola')      
    
    useEffect(() => {  
        if (loading !== 'loading' && !user) {
            console.log('saliendo')
            navigate('/', {replace: true})
        }
    }, [navigate, user, loading])

    return (
        <>
            <div className="flex p-3 w-full">
                <div className="w-60 border border-slate-300 bg-white shadow-md">
                    { user && <SideBar />}
                </div>
                <div className="ml-3 w-full border border-slate-300 bg-white shadow-md">
                    
                    <div className="">
                        { user && categories && <Outlet /> }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile