import { format } from "date-fns";
import { es } from 'date-fns/locale';
import { capitalize } from "../../utils";
import parse from 'html-react-parser';
import { applyClassesToHTML } from "../../utils/PostClasses";
import { useSelector } from "react-redux";
import RelatedPosts from "./RelatedPosts";
import Comments from "./comments/Comments";


const PostArticle = () => {
    const { post } = useSelector(state => state.posts)

    const fechaFormateada = post ? format(post.createdAt, "dd 'de' MMMM 'de' yyyy", { locale: es }) : null

    return (
        <>
            <article>
                <h2 className="text-2xl italic font-bold" >{post.category.name}</h2>
                <h1 className="text-3xl mt-2 border-b border-slate-300 pb-3" >{post.title}</h1>
                <div className="flex items-center text-sm gap-2 mt-3 text-slate-600">
                    <div className="w-7 h-7 rounded-full border border-slate-400 shadow-lg bg-slate-200 overflow-hidden">
                        <img
                            className="w-full h-full object-cover z-0" 
                            src={`${import.meta.env.VITE_URL_API}/images/${post.author.image}`} alt="" />
                    </div>       
                    <span >{capitalize(post.author.name)} {capitalize(post.author.surname)}</span><span>|</span><span className='italic'>{fechaFormateada}</span>
                </div>
                <div className='grid grid-cols-12 gap-5 mt-3 '>
                    <div className='col-span-12 md:col-span-8'>
                        <div className="w-full h-64 overflow-hidden rounded-md" >
                            <img className="w-full h-full object-cover" src={`${import.meta.env.VITE_URL_API}/images/${post.image}`} />
                        </div>

                        <div className="mt-4 space-y-3" >
                            {post.content && parse(applyClassesToHTML(post.content))}
                        </div>

                        <Comments />
                    </div>
                    <div className='col-span-12 md:col-span-4'>
                        <RelatedPosts postId={post._id} categoryId={post.category._id} />
                    </div>
                </div>
            </article>
        </>
    )
}

export default PostArticle