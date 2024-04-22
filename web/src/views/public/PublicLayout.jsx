import { Outlet, useLocation } from "react-router-dom"
import Header from "../../components/public/header/Header"
import Subscribe from "../../components/public/footer/Subscribe"
import Footer from "../../components/public/footer/Footer"

const PublicLayout = () => {
    const location = useLocation()
    const isAdminView = location.pathname.split('/')[1] === 'admin'
    const isProfileView = location.pathname.split('/')[1] === 'perfil'
    return (
        <>
            <div className="min-h-screen">
                { !isAdminView &&
                    <div className="" >
                        <Header />
                    </div>
                }
                <div className="max-w-5xl mx-auto" >
                    <Outlet />

                    
                </div>
                    { !isProfileView && <Subscribe /> }
                <Footer />

            </div>
            
        </>
    )
}

export default PublicLayout