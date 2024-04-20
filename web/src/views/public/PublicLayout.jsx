import { Outlet, useLocation } from "react-router-dom"
import Header from "../../components/public/header/Header"

const PublicLayout = () => {
    const location = useLocation()
    const isAdminView = location.pathname.split('/')[1] === 'admin'
    return (
        <>
            <div className="min-h-screen">
                { !isAdminView &&
                    <div className="" >
                        <Header />
                    </div>
                }
                <div className="max-w-6xl mx-auto" >
                    <Outlet />
                </div>
                

            </div>
            
        </>
    )
}

export default PublicLayout