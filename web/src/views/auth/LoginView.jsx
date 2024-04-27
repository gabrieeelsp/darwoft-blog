import { useEffect } from "react"
import { LoginForm } from "../../components"
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"

const LoginView = () => {
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);
    useEffect(() => {
        if (user) navigate('/')
    }, [navigate, user])

    return (
        <>
            <div className="flex justify-center">
                <div className="w-96">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default LoginView