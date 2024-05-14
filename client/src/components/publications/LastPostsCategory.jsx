import { useEffect, useState } from "react"
import { findAll } from "../../features/posts/actions"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { PostShowFifth, PostShowFirst, PostShowFourth } from "../"

const LastPostsCategory = (props) => {
    const { category } = props
    const dispatch = useDispatch()
    const [posts, setPosts] = useState()

    useEffect(() => {
        dispatch(findAll({
            categoryId: category._id, 
            limit: 7,
            isVisible: true, 
            save: false
        })).unwrap()
            .then((resp) => setPosts(resp.data.posts))
    }, [dispatch, category] )


    return (
        <>
            <div className="border-dotted border-b border-slate-300 ml-3 mt-5 mb-3">
                <Link to={`/seccion/${category.slug}`} className="text-3xl"><h2>{category.name}</h2></Link>
                <span className="text-sm">Todos los artículos</span>
            </div>
            
            {posts && (
                <>
                    <div className="grid md:grid-cols-8">
                        
                        <div className="col-span-8 md:col-span-3 flex flex-col justify-between gap-3 pl-3 pt-3 border-dotted border-r border-slate-300">
                            {posts.slice(1,3).map((post) => <PostShowFifth key={post._id} post={post} /> )}
                        </div>
                        <div className="col-span-5">
                            <PostShowFirst post={posts[0]} />
                        </div>
                    </div>
                    <h2 className="ml-3 mt-5 mb-2 text-lg">Más Noticias</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-3">
                        {posts.slice(3,7).map((post) => <PostShowFourth key={post._id} post={post} /> )}
                    </div>
                </>
            )}
        </>
    )
}

export default LastPostsCategory