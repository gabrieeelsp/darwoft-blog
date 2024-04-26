import { Link, Outlet } from "react-router-dom"
import { Footer, Header } from "../../components"

const PublicLayout = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="text-right text-sm bg-black text-slate-300 py-1/2">
                    <Link to='/auth/login' className="mr-10 hover:text-white">Acceder</Link>
                </div>
                <header className="">
                    <Header />
                </header>
                <main className="flex-1 p-4 bg-slate-50 w-full mx-auto max-w-5xl">
                    <Outlet />
                </main>
                <footer className="">
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default PublicLayout