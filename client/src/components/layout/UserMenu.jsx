import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const UserMenu = () => {
    const { user } = useSelector((state) => state.auth)
    return (
        <>
            <div className="text-right text-md pr-10 bg-black text-slate-300 py-1/2">
                { user && 
                    <>
                        <span className="mr-2">{user.email}</span>
                        <Link to='/perfil' className="mr-2">Perfil</Link>
                        
                    </> 
                }
                {!user && <Link to='/auth/login' className="hover:text-white">Acceder</Link>}
                
            </div>
        </>
    )
}

export default UserMenu