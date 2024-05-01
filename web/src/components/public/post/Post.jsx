import moment from 'moment/min/moment-with-locales';
import Comments from './comments/Comments'
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { applyClassesToHTML } from '../../../utils/PostClasses';
import { getCategoryById } from '../../../features/app/appSlice';
import RelatedPosts from './RelatedPosts';

const Post = () => {

    const { post } = useSelector((state) => state.posts)

    const category = useSelector((state) => getCategoryById(state, post.category))

    moment.locale('es');

    const fecha_convertida = moment(post.createdAt).format('LL');
    return (
        <>
            <article>
                <h2
                    className="text-2xl italic font-bold"
                >{category.name}</h2>
                <h1
                    className="text-3xl mt-2"
                >{post.title}</h1>

                <div className="flex text-sm gap-2 mt-2 text-slate-600">
                    <span >{post.author.name} {post.author.surname}</span>
                    <span>|</span>
                    <span className='italic'>{fecha_convertida}</span>
                </div>
                <div className='grid grid-cols-12 gap-5 mt-5 '>
                    <div className='col-span-8'>
                        <div className="w-full h-64 overflow-hidden rounded-md" >
                            <img className="w-full h-full object-cover" src={`http://localhost:8001/images/${post.image}`} />
                        </div>

                        <div className="mt-4 space-y-3" >
                            {post.content && parse(applyClassesToHTML(post.content))}
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <RelatedPosts />
                    </div>
                </div>

                

            </article>
            <Comments post={post} />
            
        </>
    )
}

export default Post