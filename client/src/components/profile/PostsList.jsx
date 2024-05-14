import { useSelector } from "react-redux"
import { Datatable, PostListFilter } from "../"
import { Link } from "react-router-dom"
import { MdEdit } from "react-icons/md";
import { CiEdit } from "react-icons/ci";


const PostsList = () => {

    const { posts, pagination } = useSelector((state) => state.posts)
    const { categories } = useSelector((state) => state.app)
    
    const body = posts.map((post) => ({
        title: post.title, 
        category: categories[post.category].name, 
        // isVisible: post.isVisible ? 'Si' : 'No',
        countVisits: post.countVisits,
        countComments: post.countComments || 0,
        actions: 
            <Link to={`${post._id}/editar`}>
                <div className="bg-sky-500 text-white font-bold inline-block px-2 py-0.5 rounded">
                    <CiEdit className="md:hidden text-xl" />
                    <span className="hidden md:inline">Editar</span>
                </div>
            </Link>
    }))

    const data = {
        header: [
            {property: 'title', value: 'Título', columClassName: 'pl-3', rowClassName: 'pl-3 py-2'}, 
            {property: 'category', value: 'Categoría',columClassName: '', rowClassName: 'text-center'}, 
            {property: 'countVisits', value: <div><span className="md:hidden">V.</span><span className="hidden md:inline">Visitas</span></div>, columClassName: 'pl-2', rowClassName: ''},
            {property: 'countComments', value: <div><span className="md:hidden">Coms.</span><span className="hidden md:inline">Comentarios</span></div>, columClassName: 'pl-2', rowClassName: ''},
            {property: 'actions', value: 'Acción',columClassName: 'pl-2', rowClassName:'text-center'}
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