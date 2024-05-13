import { useSelector } from "react-redux"
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { IoTimeOutline } from "react-icons/io5";

import Datatable from "../../../utils/datatable/Datatable"

const CommentsList = () => {

    const { comments, pagination } = useSelector((state) => state.comments)
    
    const body = comments.map((comment) => (
        {
            content: 
                <div className="">
                    <div>
                        <span>{comment.content}</span>
                    </div>
                    <div className="flex gap-2 justify-end items-center">
                        <IoTimeOutline />
                        <span className='text-slate-600 text-sm'>{formatDistanceToNow(comment.createdAt, { addSuffix: false, locale: es })}</span>
                    </div>
                </div>, 
            // actions: 'Eliminar'
                
        }
    ))

    const data = {
        header: [
            {property: 'content', value: 'Contenido', columClassName: 'pl-3', rowClassName: 'pl-3'}, 
            // {property: 'actions', value: 'Acción',columClassName: 'text-center', rowClassName:'text-center'}
        ],
        body
    }

    

    return (
        <>
            <Datatable data={data} pagination={{current_page: pagination.current_page, total_pages: pagination.total_pages}} />
        </>
    )
}

export default CommentsList