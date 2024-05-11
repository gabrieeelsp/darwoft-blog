
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { findOne } from "../../features/posts/actions";
import { Error, PostArticle } from "../../components";
import { cleanSlice } from "../../features/posts/postsSlice";

const Post = () => {
    const { postSlug } = useParams()
    const dispatch = useDispatch();
    const { post, error, loading } = useSelector((state) => state.posts)

    useEffect(() => {
        dispatch(findOne({id: postSlug, isVisible: true}))        
    }, [dispatch, postSlug])

    useEffect(() => {
        dispatch(cleanSlice())        
    }, [dispatch])


    return (
        <>
            <div className="pt-2">
                {post && 
                    <>
                        <PostArticle />
                    </>
                }

                {loading === 'failed' && error && <Error /> }
            </div>
            
        </>
    )
}

export default Post