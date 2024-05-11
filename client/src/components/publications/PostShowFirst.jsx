import { Link, useNavigate } from "react-router-dom"
import { applyClassesToHTML } from "../../utils/PostClasses"
import parse from 'html-react-parser';
import { capitalize } from "../../utils";
import { useSelector } from "react-redux";

const PostShowFirst = (props) => {
    const navigate = useNavigate();
    const { post, showCategory = false } = props
    const { categories } = useSelector((state) => state.app)

    const handleClick = () => {
        navigate(`/${post.slug}`)
    }

    return (
        <>
            <div key={post._id} className="grid sm:grid-cols-2 p-3 cursor-pointer" onClick={handleClick}>
                <div className="flex flex-col pr-3">
                    {showCategory && <span className="italic">{categories && categories[post.category].name}</span>}
                    <Link to={`/${post.slug}`} className="text-xl font-bold leading-tight" >{post.title}</Link>
                    <div className="text-sm mt-2 text-slate-600" >
                        {post.excerpt && parse(applyClassesToHTML(post.excerpt))}
                    </div>
                    <div className="invisible sm:visible text-sm mt-2 text-slate-700 italic text-right" >
                        <span>por {capitalize(post.author.name)} {capitalize(post.author.surname)}</span>
                    </div>
                </div>
                <div className="w-full h-52 overflow-hidden rounded-md" >
                    <img className="w-full h-full object-cover" src={`${import.meta.env.VITE_URL_API}/images/${post.image}`} />
                </div>
                <div className="sm:invisible text-sm mt-2 text-slate-700 italic text-right" >
                    <span>por {capitalize(post.author.name)} {capitalize(post.author.surname)}</span>
                </div>
            </div>
        </>
    )
}

export default PostShowFirst