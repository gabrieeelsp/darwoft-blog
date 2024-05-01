import { useDispatch, useSelector } from "react-redux"
import EditPostForm from "../../../components/public/profile/EditPostForm"
import { useParams } from 'react-router-dom'
import { useEffect } from "react";
import { cleanSlice, findOne } from "../../../features/posts/postsSlice";
import EditPostImageForm from "../../../components/public/profile/EditPostImageForm";

const PostEditView = () => {
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