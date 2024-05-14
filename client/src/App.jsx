import { Outlet } from "react-router-dom"
import { Footer, Header, UserMenu } from "./components"
import { useDispatch } from "react-redux";
import { getInitValues } from "./features/app/actions";
import { useEffect } from "react";
import { me } from "./features/auth/actions";
import { setVerified } from "./features/auth/authSlice";

function App() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getInitValues())
        const token = localStorage.getItem('accessToken');
        token 
            ? dispatch(me())
            : dispatch(setVerified())
    }, [dispatch])


    return (
        <>
            <div className="flex flex-col min-h-screen bg-slate-50 text-lg text-slate-800" >
                <header className="" >
                    <UserMenu />
                    <div className="mx-auto max-w-6xl px-3">
                        <Header />
                    </div>
                </header>
                <main className="flex-1 py-1 flex w-full mx-auto max-w-6xl  md:px-2 lg:px-3">
                    <Outlet />
                    
                </main>
                <footer>
                    <Footer />
                </footer>
                
            </div>
        </>
    )
}

export default App
