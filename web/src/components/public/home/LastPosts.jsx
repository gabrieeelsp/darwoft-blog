import { useEffect, useState } from "react"
import { findAll } from "../../../features/posts/postsSlice"
import { useDispatch } from "react-redux"
import PostPrincipal from "../category/PostPrincipal"
import PostSecundario from "../category/PostSecundario"
import PostTerciario from "../category/PostTerciario"


const LastPosts = () => {
    const dispatch = useDispatch()
    const [posts, setPosts] = useState()

    useEffect(() => {
        dispatch(findAll({ limit: 9, save: false})).unwrap()
            .then((resp) => setPosts(resp.data.posts))
    }, [dispatch] )


    return (
        <>
            {posts && (
                <>
                    <div className="grid grid-cols-8">
                        <div className="col-span-5">
                            <PostPrincipal post={posts[0]} showCategory={true} />
                        </div>
                        <div className="col-span-3">
                            {posts.slice(1,3).map((post) => <PostSecundario key={post._id} post={post} showCategory={true} /> )}
                        </div>
                    </div>
                    <h2 className="ml-3 mt-5">Más Noticias</h2>
                    <div className="grid grid-cols-4">
                        {posts.slice(4,8).map((post) => <PostTerciario key={post._id} post={post} showCategory={true} /> )}
                    </div>
                </>
            )}
        </>
    )
}

export default LastPosts