import { Link, Outlet } from "react-router-dom"
import { Footer, Header } from "../../components"
import { useSelector } from 'react-redux'

const PublicLayout = () => {
    const { user } = useSelector((state) => state.auth)
    const { categories } = useSelector((state) => state.app)
    return (
        <>
            <div className="flex flex-col min-h-screen bg-slate-50" >
                <div className="text-right text-md pr-10 bg-black text-slate-300 py-1/2">
                    { user && 
                        <>
                            <span className="mr-2">{user.email}</span>
                            <Link to='/perfil' className="mr-2">Perfil</Link>
                            
                        </> 
                    }
                    {!user && <Link to='/auth/login' className="hover:text-white">Acceder</Link>}
                    
                </div>
                <header className="px-3">
                    <Header />
                </header>
                <main className="flex-1 py-1 flex w-full mx-auto max-w-5xl text-slate-800">
                    {categories && <Outlet />}
                    
                </main>
                <footer className="">
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default PublicLayout