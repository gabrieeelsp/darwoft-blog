import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { cleanSlice, findOne } from '../../../features/posts/postsSlice'
import { Error, Post, ProgressBar } from "../../../components";

const PostView = () => {
    const { postSlug } = useParams()
    const dispatch = useDispatch();

    const { post, status, error } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(findOne(postSlug))        
    }, [dispatch, postSlug])

    useEffect(() => {
        return () => {
            dispatch(cleanSlice())
        }
    }, [dispatch])

    const content = post ? 
        <Post /> : 
        error 
            ? <Error /> 
            : 'pending' 

    return (
        <div className="w-full">          
            <ProgressBar loading={status === 'pending'} />
            {content}
        </div>
    )
}

export default PostView