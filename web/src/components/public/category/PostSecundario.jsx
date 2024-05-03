import { Link, useNavigate } from "react-router-dom"
import { capitalize } from "../../../utils";

const PostSecundario = (props) => {
    const navigate = useNavigate();
    const { post, showCategory = false  } = props

    const handleClick = () => {
        navigate(`/${post.slug}`)
    }

    return (
        <>
            <div key={post._id} className="grid grid-cols-5 p-3 cursor-pointer" onClick={handleClick}>
                <div className="col-span-3 flex flex-col pr-3">
                    {showCategory && <span className="italic text-xs">{post.category.name}</span>}
                    <Link to={`/${post.slug}`} className="text-xs font-bold" >{post.title}</Link>
                    <div className="text-xs mt-2 text-slate-700 italic text-right" >
                        <span>por {capitalize(post.author.name)} {capitalize(post.author.surname)}</span>
                    </div>

                </div>
                <div className="col-span-2 w-full h-20 overflow-hidden rounded-md" >
                    <img className="w-full h-full object-cover" src={`http://localhost:8001/images/${post.image}`} />
                </div>
                
                
            </div>
        </>
    )
}

export default PostSecundario