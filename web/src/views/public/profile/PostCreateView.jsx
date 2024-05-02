import { useNavigate } from "react-router-dom";
import NewPostForm from "../../../components/public/profile/NewPostForm"

const PostCreateView = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex justify-between gap-3 py-3 px-3 text-md bg-gray-50 border-b border-b-slate-200 font-bold text-slate-600">
                <div>
                    <button className="hover:text-sky-500" onClick={() =>navigate(-1)}>Mis Publicaciones</button> / <span>Nuevo</span>
                </div>
            </div>
            <NewPostForm />
        </>
    )
}

export default PostCreateView