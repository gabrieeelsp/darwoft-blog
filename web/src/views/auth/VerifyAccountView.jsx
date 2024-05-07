import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { verifyAccount } from "../../features/auth/authSlice";
import { BiSolidError } from "react-icons/bi";
import { VscVerifiedFilled } from "react-icons/vsc";



const VerifyAccountView = () => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get("token")

    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true)
        dispatch(verifyAccount({token})).unwrap()
            .then(() => {
                setTimeout(() => {
                    navigate('/auth/login', { replace: true})
                }, 3000)
            })
            .catch((error) => {
                setIsError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [dispatch, navigate, token])
    return (
        <>
        <div className="flex-1 flex items-center justify-center ">
            {loading &&
                <div className="border border-slate-300 w-[500px] mx-auto p-5">
                    <h1 className="text-lg border-b border-slate-300 pb-2 font-bold">Verificando su cuenta...</h1>
                    <p className="mt-2 text-sm">Estamos comprobando la autenticidad de su cuenta para que pueda ingresar a nuesto sitio lo antes posible.</p>
                </div>
            }
            {!loading && !isError &&
                <div className="border border-slate-300 w-[500px] mx-auto p-5">
                    <h1 className="text-lg border-b border-slate-300 pb-2 font-bold flex items-center" ><VscVerifiedFilled className="mr-4 text-green-500 text-xl" />Su cuenta ha sido vedificada con exito.</h1>
                    <p className="mt-2 text-sm">Pronto sera dirigido para ingresar a nuestro sitio.</p>
                </div>
            }

            {!loading && isError &&
                <div className="border border-slate-300 w-[500px] mx-auto p-5">
                    <h1 className="text-lg border-b border-slate-300 pb-2 font-bold text-red-500 flex items-center"><BiSolidError className="mr-4" />Se ha producido un error</h1>
                    <p className="mt-2 text-sm">No hemos podido verificar su cuenta, por favor vuelva a interntarlo.</p>
                </div>
            }
        </div>
            
        
        
        </>
    )
}

export default VerifyAccountView