import { Link, useSearchParams } from "react-router-dom"
import PostsList from "../../../components/public/profile/PostsList"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { findAll } from "../../../features/posts/postsSlice"
import { getCategoryBySlug } from "../../../features/app/appSlice"

const PostsListView = () => {
    const dispatch = useDispatch()
    const { posts } = useSelector((state) => state.posts)
    const { _id } = useSelector((state) => state.auth.user)

    const [currentQueryParameters, setSearchParams] = useSearchParams();

    const title = currentQueryParameters.get('title')
    const categorySlug = currentQueryParameters.get('category')
    const limit = currentQueryParameters.get('limit')
    const page = currentQueryParameters.get('page')

    const category = useSelector((state) => getCategoryBySlug(state, categorySlug))

    useEffect(() => {

        dispatch(findAll({
            authorId: _id, 
            title, 
            categoryId: category ? category._id : undefined, 
            limit: limit ? limit : 3, 
            page: page ? page : 1}))
    }, [dispatch, _id, title, category, limit, page])
    return (
        <>
            <div className="flex justify-end mb-3">
                <Link 
                to='nuevo'
                    className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-4 h-6 rounded-sm"
                    >
                    Crear Publicación
                </Link>
            </div>
                
            
            {posts && <PostsList />}
            
            
        </>
    )
}

export default PostsListView