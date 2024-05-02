import { Outlet } from "react-router-dom"
import SideBar from "../../../components/public/profile/SideBar"
import ProfileMenu from "../../../components/public/profile/ProfileMenu"
import { useSelector } from "react-redux"

const Profile = () => {
    const { user } = useSelector((state) => state.auth)
    const { categories } = useSelector((state) => state.app)
    return (
        <>
            <div className="flex p-3">
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