import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const RelatedPosts = () => {
    const { posts } = useSelector((state) => state.posts)
    return (
        <>
            {posts && (
                <div className=" border border-slate-300 shadow-lg rounded-md overflow-hidden">
                    <h2 className="bg-sky-800 text-white p-2 text-lg font-bold">También te puede gustar.</h2>
                    <div className="p-3">
                        {posts.map((post) => 
                        <div key={post._id} className="py-2 text-sm hover:text-sky-400">
                            <Link to={`/${post.slug}`}>{post.title}</Link>
                        </div>)}
                    </div>
                </div>
            )}
        </>
    )
}

export default RelatedPosts