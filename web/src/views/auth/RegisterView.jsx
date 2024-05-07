import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { cleanStatus } from "../../features/auth/authSlice";

const RegisterView = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, status } = useSelector((state) => state.auth);
    useEffect(() => {
        if (user) navigate('/', {replace: true})
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
                    {status !== 'succeeded' && <RegisterForm />}
                    {status === 'succeeded' && 
                        <div className="border border-slate-300 w-[500px] mx-auto p-5">
                            <h1 className="text-lg border-b border-slate-300 pb-2 font-bold">Hemos registrado su cuenta.</h1>
                            <p className="mt-2 text-sm">Pronto recibirás un correo para validar tu cuenta.</p>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default RegisterView