import { useSelector } from "react-redux"
import { Datatable, PostListFilter } from "../"
import { Link } from "react-router-dom"

const PostsList = () => {

    const { posts, pagination } = useSelector((state) => state.posts)
    const { categories } = useSelector((state) => state.app)
    
    const body = posts.map((post) => ({
        title: post.title, 
        category: categories[post.category].name, 
        isVisible: post.isVisible ? 'Si' : 'No',
        countVisits: post.countVisits,
        countComments: post.countComments || 0,
        actions: <Link to={`${post._id}/editar`} >Editar</Link>
    }))

    const data = {
        header: [
            {property: 'title', value: 'Título', columClassName: 'pl-3', rowClassName: 'pl-3 py-2'}, 
            {property: 'category', value: 'Categoría',columClassName: '', rowClassName: 'text-center'}, 
            {property: 'isVisible', value: 'Publicado',columClassName: '', rowClassName: 'text-center'}, 
            {property: 'countVisits', value: 'Visitas', columClassName: '', rowClassName: ''},
            {property: 'countComments', value: 'Comentarios', columClassName: '', rowClassName: ''},
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