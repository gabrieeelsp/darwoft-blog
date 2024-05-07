import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm"
import { cleanStatus } from "../../features/auth/authSlice"

const ForgotPasswordView = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, status } = useSelector((state) => state.auth);
    useEffect(() => {
        if (user) navigate('/', { replace: true})
    }, [navigate, user])

    useEffect(() => {
        return () => {
            dispatch(cleanStatus())
        }
    }, [dispatch])

    return (
        <>
            <div className="flex-1 flex items-center justify-center ">
                <div className="w-96">
                {status !== 'succeeded' && <ForgotPasswordForm />}
                    {status === 'succeeded' && 
                        <div className="border border-slate-300 w-[500px] mx-auto p-5">
                            <h1 className="text-lg border-b border-slate-300 pb-2 font-bold">Hemos verificado su solicitud.</h1>
                            <p className="mt-2 text-sm">Pronto recibirás un correo para cambiar tu contraseña.</p>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ForgotPasswordView