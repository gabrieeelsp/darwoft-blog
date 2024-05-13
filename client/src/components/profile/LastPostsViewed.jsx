import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { Datatable } from '../'
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

const LastPostsViewed = () => {
    const { lastPostsViewed } = useSelector((state) => state.auth.user)
    const { categories } = useSelector((state) => state.app)
    
    const body = lastPostsViewed.map((postViewed) => ({
        title: <Link to={`/${postViewed.post.slug}`} target="_blank" >{postViewed.post.title}</Link>, 
        category: categories[postViewed.post.category].name, 
        createdAt: formatDistanceToNow(postViewed.createdAt, { addSuffix: false, locale: es }),
    }))

    const data = {
        header: [
            {property: 'title', value: 'Título', columClassName: 'pl-3', rowClassName: 'pl-3 py-2'}, 
            {property: 'category', value: 'Categoría',columClassName: '', rowClassName: 'text-center'}, 
            {property: 'createdAt', value: '', columClassName: '', rowClassName: ''}
        ],
        body
    }

    

    return (
        <>
            <div className="border border-slate-200 mt-5">
                <h2 className="bg-sky-600 text-white px-2 py-1 font-bold">Últimas publicaciones vistas</h2>
                <div className="p-2"><Datatable data={data} showHeader={false} />  </div>
                      
            </div>
            
        </>
    )
}

export default LastPostsViewed