import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components"
import { useSelector } from 'react-redux';
import { useEffect } from "react";

const RegisterView = () => {
    const navigate = useNavigate();

    const { user, status } = useSelector((state) => state.auth);
    useEffect(() => {
        if (user) navigate('/')
    }, [navigate, user])

    return (
        <>
            <div className="flex justify-center">
                <div className="w-96">
                    {status !== 'succeeded' && <RegisterForm />}
                    {status === 'succeeded' && <span>REgistro satisfactorio</span>}
                </div>
            </div>
        </>
    )
}

export default RegisterView