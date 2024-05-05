import { Link, useNavigate } from "react-router-dom"
import { capitalize } from "../../../utils";

const PostCuarto = (props) => {
    const navigate = useNavigate();
    const { post, showCategory = false  } = props

    const handleClick = () => {
        navigate(`/${post.slug}`)
    }

    return (
        <>
            <div key={post._id} className="flex flex-col cursor-pointer" onClick={handleClick}>
                <div className="w-full h-24 overflow-hidden rounded-md" >
                    <img className="w-full h-full object-cover" src={`${import.meta.env.VITE_URL_API}/images/${post.image}`} />
                </div>
                <div className="flex flex-col pr-3">
                    {showCategory && <span className="italic text-xs">{post.category.name}</span>}
                    <Link to={`/${post.slug}`} className="text-md leading-tight font-bold py-2" >{post.title}</Link>
                    <div className="text-xs text-slate-700 italic text-right" >
                        <span>por {capitalize(post.author.name)} {capitalize(post.author.surname)}</span>
                    </div>

                </div>
                
                
                
            </div>
        </>
    )
}

export default PostCuarto