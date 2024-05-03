import { useEffect, useState } from "react"
import { findAll } from "../../../features/posts/postsSlice"
import { useDispatch } from "react-redux"
import PostPrincipal from "../category/PostPrincipal"
import PostCuarto from "../category/PostCuarto"
import { Link } from "react-router-dom"
import PostQuinto from "../category/PostQuinto"


const LastPostsCategory = (props) => {
    const { category } = props
    const dispatch = useDispatch()
    const [posts, setPosts] = useState()

    useEffect(() => {
        dispatch(findAll({categoryId: category._id, limit: 10, save: false})).unwrap()
            .then((resp) => setPosts(resp.data.posts))
    }, [dispatch, category] )


    return (
        <>
            <div className="border-dotted border-b border-slate-300 ml-3 mt-5 mb-3">
                <Link to={`/seccion/${category.slug}`} className="text-2xl"><h2>{category.name}</h2></Link>
                <span className="text-xs">Todos los artículos</span>
            </div>
            
            {posts && (
                <>
                    <div className="grid grid-cols-7">
                        
                        <div className="col-span-3 flex flex-col gap-3 pl-3 pt-3">
                            {posts.slice(1,4).map((post) => <PostQuinto key={post._id} post={post} /> )}
                        </div>
                        <div className="col-span-4">
                            <PostPrincipal post={posts[0]} />
                        </div>
                    </div>
                    <h2 className="ml-3 mt-5 mb-2">Más Noticias</h2>
                    <div className="grid grid-cols-5 gap-6 ml-3">
                        {posts.slice(5,10).map((post) => <PostCuarto key={post._id} post={post} /> )}
                    </div>
                </>
            )}
        </>
    )
}

export default LastPostsCategory