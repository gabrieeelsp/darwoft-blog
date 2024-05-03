import { Link, useNavigate } from "react-router-dom"
import { capitalize } from "../../../utils";

const PostQuinto = (props) => {
    const navigate = useNavigate();
    const { post, showCategory = false  } = props

    const handleClick = () => {
        navigate(`/${post.slug}`)
    }

    return (
        <>
            <div key={post._id} className="cursor-pointer" onClick={handleClick}>
                <div className="col-span-3 flex flex-col pr-3">
                    {showCategory && <span className="italic text-xs">{post.category.name}</span>}
                    <Link to={`/${post.slug}`} className="text-xs font-bold" >{post.title}</Link>
                    <div className="text-xs text-slate-700 italic text-right" >
                        <span>por {capitalize(post.author.name)} {capitalize(post.author.surname)}</span>
                    </div>

                </div>
                
                
            </div>
        </>
    )
}

export default PostQuinto