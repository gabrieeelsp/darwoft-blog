import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { cleanSlice, findOne } from '../../../features/posts/postsSlice'
import { Post } from "../../../components";
import ProgressBar from "../../../utils/ProgressBar";

const PostView = () => {
    const { postSlug } = useParams()
    const dispatch = useDispatch();

    const { post, status, error } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(findOne(postSlug))
        
        return () => {
            // dispatch(cleanSlice())
        }
    }, [dispatch, postSlug])

    useEffect(() => {
        
        return () => {
            dispatch(cleanSlice())
        }
    }, [dispatch])

    const content = post ? 
        <Post /> : 
        error ? 
        error : 'pending' 

    return (
        <div className="">

            
            <ProgressBar loading={status === 'pending'} />
            { content }
        </div>

    )
}

export default PostView