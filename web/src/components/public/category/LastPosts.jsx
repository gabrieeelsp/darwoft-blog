import { useEffect, useState } from "react"
import { findAll } from "../../../features/posts/postsSlice"
import { useDispatch } from "react-redux"
import PostPrincipal from "./PostPrincipal"
import PostSecundario from "./PostSecundario"
import PostTerciario from "./PostTerciario"

const LastPosts = (props) => {
    const { categoryId } = props
    const dispatch = useDispatch()
    const [posts, setPosts] = useState()

    useEffect(() => {
        dispatch(findAll({categoryId, limit: 10, save: false})).unwrap() // agregar categoryId
            .then((resp) => setPosts(resp.data.posts))
    }, [dispatch, categoryId] )


    return (
        <>
            {posts && (
                <>
                    <div className="grid grid-cols-7">
                        <div className="col-span-4">
                            <PostPrincipal post={posts[0]} />
                        </div>
                        <div className="col-span-3">
                            {posts.slice(1,3).map((post) => <PostSecundario key={post._id} post={post} /> )}
                        </div>
                    </div>
                    <h2 className="ml-3 mt-5">Más Noticias</h2>
                    <div className="grid grid-cols-5">
                        {posts.slice(4,9).map((post) => <PostTerciario key={post._id} post={post} /> )}
                    </div>
                </>
            )}
        </>
    )
}

export default LastPosts