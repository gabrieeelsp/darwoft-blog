import { Outlet } from "react-router-dom"
import { Footer, Header, UserMenu } from "../components"
import { useSelector } from "react-redux"

function Layout() {

    const { categories } = useSelector((state) => state.app)

    return (
        <>
            <div className="flex flex-col min-h-screen bg-slate-50 text-lg text-slate-800" >
                <header >
                    <UserMenu />
                    <Header />
                </header>
                <main className="flex-1 py-1 flex w-full mx-auto max-w-6xl ">
                    {categories && <Outlet />}
                    
                </main>
                <footer>
                    <Footer />
                </footer>
                
            </div>
        </>
    )
}

export default Layout
