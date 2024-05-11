import { useEffect, useState } from "react"
import { findAll } from "../../features/posts/actions"
import { useDispatch } from "react-redux"
import { PostShowFirst, PostShowSecondary, PostShowThird } from "../"


const LastPosts = (props) => {
    const { categoryId } = props;
    const dispatch = useDispatch()
    const [posts, setPosts] = useState()

    useEffect(() => {
        dispatch(findAll({ 
            limit: 7, 
            save: false,
            categoryId: categoryId,
            isVisible: true,
        })).unwrap()
            .then((resp) => setPosts(resp.data.posts))
    }, [dispatch, categoryId] )


    return (
        <>
            {posts && (
                <>
                    <div className="grid md:grid-cols-8 mt-3">
                        <div className="md:col-span-5">
                            <PostShowFirst post={posts[0]} showCategory={!categoryId} />
                        </div>
                        <div className="md:col-span-3 border-l border-dotted border-slate-300">
                            {posts.slice(1,3).map((post) => <PostShowSecondary key={post._id} post={post} showCategory={!categoryId} /> )}
                        </div>
                    </div>
                    <h2 className="ml-3 mt-5">Más Noticias</h2>
                    <div className="grid md:grid-cols-4">
                        {posts.slice(3,7).map((post) => <PostShowThird key={post._id} post={post} showCategory={!categoryId} /> )}
                    </div>
                </>
            )}
        </>
    )
}

export default LastPosts