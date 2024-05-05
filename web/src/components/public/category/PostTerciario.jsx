import { Link, useNavigate } from "react-router-dom"

const PostTerciario = (props) => {
    const navigate = useNavigate();
    const { post, showCategory = false  } = props

    const handleClick = () => {
        navigate(`/${post.slug}`)
    }

    return (
        <>
            <div key={post._id} className="p-3 cursor-pointer" onClick={handleClick}>
                <div className="flex flex-col pr-3">
                    {showCategory && <span className="italic text-md">{post.category.name}</span>}
                    <Link to={`/${post.slug}`} className="text-md leading-tight font-bold" >{post.title}</Link>


                </div>
                
                
            </div>
        </>
    )
}

export default PostTerciario