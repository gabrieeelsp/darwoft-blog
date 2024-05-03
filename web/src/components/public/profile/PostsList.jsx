import { useSelector } from "react-redux"
import Datatable from "../../utils/datatable/Datatable"
import { Link } from "react-router-dom"
import PostListFilter from "./postsList/PostListFilter"

const PostsList = () => {

    const { posts, pagination } = useSelector((state) => state.posts)

    const body = posts.map((post) => ({title: post.title, category: post.category.name, actions: <Link to={`${post._id}/editar`} >Editar</Link>}))

    const data = {
        header: [
            {property: 'title', value: 'Título', columClassName: 'pl-3', rowClassName: 'pl-3 py-2'}, 
            {property: 'category', value: 'Categoría',columClassName: '', rowClassName: 'text-center'}, 
            {property: 'actions', value: 'Acción',columClassName: '', rowClassName:'text-center'}
        ],
        body
    }

    

    return (
        <>
            <PostListFilter />
            <Datatable data={data} pagination={{current_page: pagination.current_page, total_pages: pagination.total_pages}} />
        </>
    )
}

export default PostsList