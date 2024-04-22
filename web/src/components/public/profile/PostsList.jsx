import PostListItem from "./postsList/PostListItem"

const posts = [
    {
        id: "jsjsdsk",
        title: 'Dominando el Arte de Linux: Consejos y Trucos para Principiantes',
        category: {
            name: 'Linux',
        }
    },
    {
        id: "jsjsdsrererk",
        title: 'Explorando el Mundo de Linux: Más Allá de los Sistemas Operativos Tradicionales',
        category: {
            name: 'Linux',
        }
    },
    {
        id: "jsjrtt4sdsk",
        title: 'Linux: Libertad, Seguridad y Eficiencia en un Mundo Digital',
        category: {
            name: 'Física',
        }
    },{
        id: "jssdweejsdsk",
        title: 'Desmitificando Linux: Un Vistazo Profundo al Sistema Operativo de Código Abierto',
        category: {
            name: 'IA',
        }
    }
]

const PostsList = () => {
    return (
        <>
            <div className="mt-4">
                <table className="w-full text-sm">
                    <thead className="border-b-2 border-b-slate-500 text-left">
                        <th className="pl-3">Título</th>
                        <th>Categoría</th>
                        <th>Acción</th>
                    </thead>
                    <tbody>
                        { posts?.map((post) => <PostListItem key={post.id} post={post} />)}
                    </tbody>
                </table>
                
            </div>
        </>
    )
}

export default PostsList