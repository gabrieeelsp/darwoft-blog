import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import { UserInfo } from "../../components"
import Sidebar from "./Sidebar"

const ProfileLayout = () => {
    const navigate = useNavigate()

    const { user, verified } = useSelector((state) => state.auth)
    // if(!user) navigate('/', {replace: true})
    useEffect(() => {        
        if (verified && !user) navigate('/', {replace: true})
    }, [navigate, user, verified])

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {user &&
            <div className="flex p-3 w-full">
                <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
                <div className="w-60 border border-slate-300 bg-white shadow-md hidden md:block">
                    <UserInfo />
                </div>
                <div className="md:ml-3 w-full border border-slate-300 bg-white shadow-md">
                    
                    <div className="">
                        <Outlet context={[setIsSidebarOpen]} />
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default ProfileLayout;