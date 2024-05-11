import { Outlet } from "react-router-dom"
import { Footer, Header, UserMenu } from "./components"
import { useDispatch } from "react-redux";
import { getInitValues } from "./features/app/actions";
import { useEffect } from "react";
import { me } from "./features/auth/actions";

function App() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getInitValues())
        const token = localStorage.getItem('accessToken');
        if (token) {
            dispatch(me());
    }
    }, [dispatch])


    return (
        <>
            <div className="flex flex-col min-h-screen bg-slate-50 text-lg text-slate-800" >
                <header >
                    <UserMenu />
                    <Header />
                </header>
                <main className="flex-1 py-1 flex w-full mx-auto max-w-6xl ">
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
