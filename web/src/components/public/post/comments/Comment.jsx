import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Comment = (props) => {
    const { comment } = props
    return (
        <>
            <div className='flex mt-3 p-2 border border-slate-200 rounded-lg'>
                <div
                    className='w-12 h-12 rounded-full overflow-hidden border border-slate-300 bg-slate-100'
                >
                    
                </div>
                <div className="w-full px-5">
                    <span className="font-bold text-slate-800">{comment.user.name} {comment.user.surname}</span>
                    <p 
                    className='col-span-11  w-full text-slate-700'                        
                    >{comment.content}</p>

                    <div className="flex justify-start mt-2 gap-3">
                        <button><AiOutlineLike /></button>
                        <button><AiOutlineDislike /></button>
                        <button>Responder</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Comment