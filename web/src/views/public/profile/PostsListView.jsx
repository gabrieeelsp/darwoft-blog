import { Link } from "react-router-dom"
import PostsList from "../../../components/public/profile/PostsList"
import PostListFilter from "../../../components/public/profile/postsList/PostListFilter"

const PostsListView = () => {
    return (
        <>
            <div className="flex justify-end mb-3">
                <Link 
                to='nuevo'
                    className="bg-sky-500 ho<<<<<ver:bg-sky-600 text-white font-bold px-4 h-6 rounded-sm"
                    >
                    Crear Publicación
                </Link>
            </div>
                
            <PostListFilter />
            <PostsList />
        </>
    )
}

export default PostsListView