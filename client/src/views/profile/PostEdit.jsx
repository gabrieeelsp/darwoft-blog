import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import { findOne } from "../../features/posts/actions";
import { cleanSlice } from "../../features/posts/postsSlice";
import { EditPostForm, EditPostImageForm, Error } from "../../components";
import { RxHamburgerMenu } from "react-icons/rx";

const PostEdit = () => {
    const [ setShowCartSidebar ] = useOutletContext()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { post } = useSelector((state) => state.posts)
    const { postId } = useParams();

    const [tabSelected, setTabSelected] = useState('info')

    useEffect(() => {
        dispatch(findOne({id: postId}));

        return () => {
            dispatch(cleanSlice())
        }
    }, [dispatch, postId])

    return (
        <>
            <div className="flex justify-between gap-3 py-3 px-3 text-md bg-gray-50 border-b border-b-slate-200 font-bold text-slate-600">
                <div className="flex items-center gap-3">
                    <button className="md:hidden" onClick={() => setShowCartSidebar(true)}>
                        <RxHamburgerMenu className="text-xl" />
                    </button>
                    <button className="hover:text-sky-500" onClick={() =>navigate(-1)}>Mis Publicaciones</button> / <span>Editar</span>
                </div>
            </div>
            <div className="flex gap-5 border-b border-slate-200 mr-3 ml-4 sm:ml-10 my-4 pb-1">
                <button 
                    onClick={() => setTabSelected('info')} 
                    className={`${tabSelected === 'info' ? 'text-sky-700' : ''} font-bold`}
                    >Info</button>
                <button 
                    onClick={() => setTabSelected('image')}
                    className={`${tabSelected === 'image' ? 'text-sky-700' : ''} font-bold`}
                    >Imagen</button>
            </div>
            {post && tabSelected === 'info' && <EditPostForm /> }
            {post && tabSelected === 'image' && <EditPostImageForm /> }
            
        </>
    )
}

export default PostEdit