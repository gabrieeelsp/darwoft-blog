import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createComment } from "../../../../features/posts/postsSlice"
import loading from '../../../../assets/loading.gif'

const CommentForm = (props) => {
    const { postId } = props
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const [content, setContent] = useState('')
    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const [loading, setLoading] = useState(false);
    const onSubmit = (event) => {
        event.preventDefault()
        setLoading(true)
        dispatch(createComment({content, postId})).unwrap()
            .then(() => {
                
            })
            .finally(() => {
                setLoading(false)
                setContent('')
            })
    }

    const isDisabled = !content;
    return (
        <>
            <div className="border border-slate-200 shadow-lg rounded-sm p-2">
                <form onSubmit={onSubmit} >
                <div className='flex'>
                
                    <div className='w-12 h-12 rounded-full overflow-hidden border border-slate-300 bg-slate-100'>
                    <img 
                        className="w-full h-full object-cover z-0" 
                        src={`${import.meta.env.VITE_URL_API}/images/${user.image}`} alt="" />
                    </div>
                    <textarea 
                        className={`${loading ? 'bg-slate-100': ''} col-span-11 border border-slate-200 w-full ml-5 h-20 resize-none focus:outline-none p-2 text-slate-700 rounded-sm`}
                        name="" 
                        id="" 
                        cols="30" 
                        rows="10"
                        onChange={handleChange}
                        value={content}
                        disabled={loading}
                        
                        ></textarea>
                </div>
                <div className="flex justify-end mt-2">
                    <button disabled={isDisabled} className={`${isDisabled ? 'bg-slate-300' : 'bg-sky-500 hover:bg-sky-600'}    text-white font-bold py-1 px-4 rounded  `}>{loading ? 'Enviando' : 'Enviar'}</button>
                </div>
                </form>
            </div>

        </>
    )
}

export default CommentForm