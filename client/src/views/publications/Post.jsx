
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { findOne } from "../../features/posts/actions";
import { Error, PostArticle } from "../../components";
import { cleanSlice } from "../../features/posts/postsSlice";
import { addPostViewed } from "../../features/user/actions";

const Post = () => {
    const { postSlug } = useParams()
    const dispatch = useDispatch();
    const { post, error, loading } = useSelector((state) => state.posts)
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(findOne({id: postSlug, isVisible: true})).unwrap()
            .then((resp) => {
                if (user) dispatch(addPostViewed({id: user._id, postId: resp.data._id}))
            })       
    }, [dispatch, postSlug])

    useEffect(() => {
        return () => {
            dispatch(cleanSlice())  
        }
    }, [dispatch])


    return (
        <>
            <div className="pt-2 px-3 sm:px-3 md:px-1 lg:px-0">
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