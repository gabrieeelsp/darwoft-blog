import { Link } from 'react-router-dom'

const PostListItem = (props) => {
    const { post } = props
    
    return (
        <>
            <tr className='hover:bg-sky-100'>
                <td className='pl-3 py-[8px]'>{post.title}</td>
                <td className='text-center'>{post.category.name}</td>
                <td className='text-center'><Link to={`${post._id}/editar`} >Editar</Link></td>
            </tr>
        </>
    )
}

export default PostListItem