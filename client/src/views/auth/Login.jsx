import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components"
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Login = () => {
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);
    useEffect(() => {
        if (user) navigate('/')
    }, [navigate, user])

    return (
        <>
            <div className="flex-1 flex items-center justify-center ">
                <div className="w-96">
                    <LoginForm />
                </div>
            </div>
        </>
    )
}

export default Login