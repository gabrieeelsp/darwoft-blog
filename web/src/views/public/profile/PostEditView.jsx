import { useDispatch, useSelector } from "react-redux"
import EditPostForm from "../../../components/public/profile/EditPostForm"
import { useParams } from 'react-router-dom'
import { useEffect } from "react";
import { findOne } from "../../../features/posts/postsSlice";

const PostEditView = () => {
    const dispatch = useDispatch();
    const { post } = useSelector((state) => state.posts)
    const { postId } = useParams();

    useEffect(() => {
        dispatch(findOne(postId));
    }, [dispatch, postId])

    return (
        <>
            {post && <EditPostForm />}
        </>
    )
}

export default PostEditView