import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { verifyAccount } from "../../features/auth/authSlice";

const VerifyAccountView = () => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();
    const token = searchParams.get("token")

    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        dispatch(verifyAccount({token})).unwrap()
            .then(() => {

            })
            .catch((error) => {
                
            })
            .finally(() => {
                setLoading(false)
            })
    })
    return (
        <>
        
        </>
    )
}

export default VerifyAccountView