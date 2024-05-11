import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { capitalize } from '../../../utils';


const Comment = (props) => {
    const { comment } = props

    const tiempoTranscurrido = formatDistanceToNow(comment.createdAt, { addSuffix: false, locale: es });
    return (
        <>
            <div className='flex mt-3 p-2 border border-slate-100 rounded-sm shadow-md'>
                <div className='w-12 h-12 rounded-full overflow-hidden border border-slate-300 bg-slate-100'>
                    <img
                        className="w-full h-full object-cover z-0" 
                        src={`${import.meta.env.VITE_URL_API}/images/${comment.author.image}`} alt="" /> 
                </div>
                <div className="w-full px-5">
                    <div className='flex justify-between'>
                        <span className="font-bold text-slate-800">{capitalize(comment.author.name)} {capitalize(comment.author.surname)}</span>
                        <span className='text-slate-600 text-sm'>{tiempoTranscurrido}</span>
                    </div>
                    
                    <p className='col-span-11  w-full text-slate-700 text-sm'>{comment.content}</p>

                    <div className="flex justify-start mt-2 gap-3">
                        {/* <button><AiOutlineLike /></button>
                        <button><AiOutlineDislike /></button> */}
                        <button>Responder</button>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default Comment