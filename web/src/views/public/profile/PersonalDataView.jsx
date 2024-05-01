import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import PersonalDataForm from "../../../components/public/profile/PersonalDataForm"
import { findOne } from "../../../features/user/usersSlice";

const PersonalDataView = () => {
    const dispatch = useDispatch();
    const { _id } = useSelector((state) => state.auth.user)
    const { user } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(findOne(_id))
    }, [dispatch, _id])

    return (
        <>
            { user && <PersonalDataForm />}
        </>
    )
}

export default PersonalDataView