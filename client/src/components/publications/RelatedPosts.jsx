import { useEffect, useState } from "react"
import { findAll } from "../../features/posts/actions"
import { useDispatch } from "react-redux"
import RelatedPost from "./RelatedPost"

const RelatedPosts = (props) => {
    const { postId, categoryId } = props
    const dispatch = useDispatch()
    const [posts, setPosts] = useState()

    useEffect(() => {
        dispatch(findAll({
            categoryId, 
            limit: 5, 
            exclude: postId, 
            isVisible: true, 
            save: false
        })).unwrap()
            .then((resp) => setPosts(resp.data.posts))
    }, [dispatch, categoryId, postId])

    return (
        <>
            {posts && (
                <div className=" border border-slate-300 shadow-lg rounded-md overflow-hidden">
                    <h2 className="bg-sky-800 text-white p-2 text-lg font-bold">También te puede Interesar</h2>
                    <div className="p-3 font-bold">
                        {posts.map((post) => <RelatedPost key={post._id} post={post} /> )}
                    </div>
                </div>
            )}
        </>
    )
}

export default RelatedPosts