import { Link, useSearchParams } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { findAll } from "../../features/posts/actions"
import { getCategoryBySlug } from "../../features/app/appSlice"
import { FiPlus } from "react-icons/fi";
import { PostsList as PostListComponent } from "../../components"

const PostsList = () => {
    const dispatch = useDispatch()
    const { posts } = useSelector((state) => state.posts)
    const { _id } = useSelector((state) => state.auth.user)

    const [currentQueryParameters] = useSearchParams();

    const title = currentQueryParameters.get('title')
    const categorySlug = currentQueryParameters.get('category')
    const orderBy = currentQueryParameters.get('order-by')
    const limit = currentQueryParameters.get('limit')
    const page = currentQueryParameters.get('page')

    const category = useSelector((state) => getCategoryBySlug(state, categorySlug))
    
    useEffect(() => {

        dispatch(findAll({
            authorId: _id, 
            title, 
            categoryId: category ? category._id : undefined, 
            orderBy,
            limit: limit ? limit : 6, 
            page: page ? page : 1}))
    }, [dispatch, _id, title, category, orderBy, limit, page])

    return (
        <>
            <div className="flex justify-between gap-3 py-3 px-3 text-md bg-gray-50 border-b border-b-slate-200 font-bold text-slate-600">
                <span>Mis Publicaciones</span>  
                <Link 
                    to='nuevo'
                        className="flex gap-2 items-center bg-sky-500 hover:bg-sky-600 text-white  px-3 h-6 rounded-sm"
                        >
                            <FiPlus />
                            <span>Nuevo</span>
                        
                    </Link>  
            </div>
            <div className="p-6">
                {posts && <PostListComponent />}
            </div>
            
            
            
        </>
    )
}

export default PostsList