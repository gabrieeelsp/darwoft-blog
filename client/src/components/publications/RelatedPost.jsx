import { Link } from "react-router-dom"

const RelatedPost = (props) => {
    const { post } = props

    return (
        <>
            <div key={post._id} className="py-1 text-sm hover:text-sky-400 flex flex-col">
                <span className="italic text-xs text-sky-800">{post.category.name}</span>
                <Link to={`/${post.slug}`}>{post.title}</Link>
                <hr className="w-[80%] mx-auto mt-2"/>
            </div>
        </>
    )
}

export default RelatedPost