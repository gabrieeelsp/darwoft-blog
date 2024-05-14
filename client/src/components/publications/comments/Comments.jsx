import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';
import { findAllComments } from '../../../features/posts/actions';


const Comments = () => {
    const { user } = useSelector((state) => state.auth)
    const { _id } = useSelector((state) => state.posts.post)
    const dispatch = useDispatch()

    const [showMessages, setShowMessages] = useState(false)
    const [showMoreButton, setShowMoreButton] = useState(false)
    const [page, setPage] = useState(1)

    const limit = 5;

    useEffect(() => {
        showMessages && dispatch(findAllComments({postId: _id, limit, page})).unwrap()
            .then((resp) => {
                setShowMoreButton(true)
                resp.data.comments.length < limit && setShowMoreButton(false)
            })
    }, [dispatch, _id, page, showMessages])

    return (
        <>
            <section>
                <h1
                    className="text-2xl mt-4"
                >Comentarios</h1>
                <div className='mt-3'>
                    {user && <CommentForm postId={_id} /> }
                    {!user && <>
                        <div className="border border-slate-200 shadow-lg rounded-sm p-4 text-center">
                            <span>Debes ingresar para poder comentar en esta publicación.</span>
                        </div>
                    </> }
                    
                    <CommentsList />
                    <div className='text-center mt-5'>
                        {!showMessages &&<button
                            onClick={() => setShowMessages(true)} 
                            className='border border-slate-400 shadow-md bg-slate-100 px-4 py-1 rounded hover:bg-white '>Mostrar mensajes</button>
                        }
                        {showMessages && showMoreButton && <button
                            onClick={() => setPage(page + 1)} 
                            className='border border-slate-400 shadow-md bg-slate-100 px-4 py-1 rounded hover:bg-white '>Mostrar más</button>
                        }
                    </div>
                </div>
            </section> 
        </>
    )
}

export default Comments