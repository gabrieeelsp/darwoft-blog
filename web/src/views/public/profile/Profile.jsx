import { Outlet } from "react-router-dom"
import SideBar from "../../../components/public/profile/SideBar"
import ProfileMenu from "../../../components/public/profile/ProfileMenu"

const Profile = () => {
    return (
        <>
            <div className="flex p-3">
                <div className="w-60">
                    <SideBar />
                </div>
                <div className="ml-3 w-full border border-slate-300">
                    <ProfileMenu />
                    <div className="p-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile