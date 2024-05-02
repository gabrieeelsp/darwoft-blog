import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import PersonalDataForm from "../../../components/public/profile/PersonalDataForm"
import { findOne } from "../../../features/user/usersSlice";
import { useNavigate } from "react-router-dom";

const PersonalDataView = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { _id } = useSelector((state) => state.auth.user)
    const { user } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(findOne(_id))
    }, [dispatch, _id])

    return (
        <>
            <div className="flex justify-between gap-3 py-3 px-3 text-md bg-gray-50 border-b border-b-slate-200 font-bold text-slate-600">
                <div>
                    <span>Mis Datos personales</span>
                </div>
            </div>
            { user && <PersonalDataForm />}
        </>
    )
}

export default PersonalDataView