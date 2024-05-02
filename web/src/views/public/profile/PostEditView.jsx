import { useDispatch, useSelector } from "react-redux"
import EditPostForm from "../../../components/public/profile/EditPostForm"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from "react";
import { cleanSlice, findOne } from "../../../features/posts/postsSlice";
import EditPostImageForm from "../../../components/public/profile/EditPostImageForm";

const PostEditView = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { post } = useSelector((state) => state.posts)
    const { postId } = useParams();

    useEffect(() => {
        dispatch(findOne(postId));

        return () => {
            dispatch(cleanSlice())
        }
    }, [dispatch, postId])

    return (
        <>
            <div className="flex justify-between gap-3 py-3 px-3 text-md bg-gray-50 border-b border-b-slate-200 font-bold text-slate-600">
                <div>
                    <button className="hover:text-sky-500" onClick={() =>navigate(-1)}>Mis Publicaciones</button> / <span>Editar</span>
                </div>
            </div>
            {post && 
                <>
                    <EditPostForm />
                    <EditPostImageForm />
                </>
                }
            
        </>
    )
}

export default PostEditView