import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { UserInfo } from "../../components"

const ProfileLayout = () => {
    const navigate = useNavigate()

    const { user, loading } = useSelector((state) => state.auth)
    useEffect(() => {        
        if (loading === 'failed' && !user) navigate('/', {replace: true})
    }, [navigate, user, loading])

    return (
        <>
            {user &&
            <div className="flex p-3 w-full">
                <div className="w-60 border border-slate-300 bg-white shadow-md">
                    <UserInfo />
                </div>
                <div className="ml-3 w-full border border-slate-300 bg-white shadow-md">
                    
                    <div className="">
                        <Outlet />
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default ProfileLayout