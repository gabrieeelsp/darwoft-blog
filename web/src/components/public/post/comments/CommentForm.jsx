import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createComment } from "../../../../features/posts/postsSlice"

const CommentForm = (props) => {
    const { postId } = props
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const [content, setContent] = useState('')
    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const onSubmit = (event) => {
        console.log(content)
        event.preventDefault()
        dispatch(createComment({content, postId})).unwrap()
            .then(() => {
                setContent('')
            })
    }
    return (
        <>
            <div className="border border-slate-200 shadow-lg rounded-lg p-2">
                <form onSubmit={onSubmit} >
                <div className='flex'>
                    <div className='w-12 h-12 rounded-full overflow-hidden border border-slate-300 bg-slate-100'>
                    <img 
                        className="w-full h-full object-cover z-0" 
                        src={`http://localhost:8001/images/${user.image}`} alt="" />
                    </div>
                    <textarea 
                        className='col-span-11 border border-slate-200 w-full ml-5 h-20 resize-none focus:outline-none p-2 text-slate-700 rounded-lg'
                        name="" 
                        id="" 
                        cols="30" 
                        rows="10"
                        onChange={handleChange}
                        value={content}
                        
                        ></textarea>
                </div>
                <div className="flex justify-end mt-2">
                    <button disabled={!content} className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-1 px-4 rounded">Enviar</button>
                </div>
                </form>
            </div>

        </>
    )
}

export default CommentForm