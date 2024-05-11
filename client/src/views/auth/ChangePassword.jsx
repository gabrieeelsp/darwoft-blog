import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from "react-router-dom"
import { cleanStatus } from "../../features/auth/authSlice"
import { ChangePasswordForm } from "../../components"

const ChangePassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const token = searchParams.get("token")
    useEffect(() => {
        if (!token) navigate('/', {replace: true})
    }, [navigate, token])
    
    const { user, loading } = useSelector((state) => state.auth);
    useEffect(() => {
        if (user) navigate('/', { replace: true})
    }, [navigate, user])

    useEffect(() => {
        return () => {
            dispatch(cleanStatus())
        }
    }, [dispatch, navigate])

    return (
        <>
            <div className="flex-1 flex items-center justify-center ">
                <div className="w-96">
                    {loading !== 'succeeded' && <ChangePasswordForm token={token} />}
                    {loading === 'succeeded' && 
                        <div className="border border-slate-300 w-[500px] mx-auto p-5">
                            <h1 className="text-lg border-b border-slate-300 pb-2 font-bold">Has cambiado tu contraseña.</h1>
                            <p className="mt-2 text-sm">Pronto serás redirigido para ingresar a nuestro sitio.</p>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default ChangePassword