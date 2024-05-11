import { Link, useNavigate } from "react-router-dom"
import { capitalize } from "../../utils";
import { useSelector } from "react-redux";

const PostShowFifth = (props) => {
    const navigate = useNavigate();
    const { post, showCategory = false  } = props
    const { categories } = useSelector((state) => state.app)

    const handleClick = () => {
        navigate(`/${post.slug}`)
    }

    return (
        <>
            <div key={post._id} className="cursor-pointer mb-1" onClick={handleClick}>
                <div className="col-span-3 flex flex-col pr-3">
                    {showCategory && <span className="italic text-sm">{categories && categories[post.category].name}</span>}
                    <Link to={`/${post.slug}`} className="text-md font-bold" >{post.title}</Link>
                    <div className="text-sm mt-1 text-slate-600 italic text-right" >
                        <span>por {capitalize(post.author.name)} {capitalize(post.author.surname)}</span>
                    </div>

                </div>
                
                
            </div>
        </>
    )
}

export default PostShowFifth